import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

declare const emailjs: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  personal: PersonalInfo | null = null;

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  sending = false;
  error = false;

  // ✏️ Replace these three values with yours from EmailJS dashboard
  private SERVICE_ID  = 'service_eno7uo8';
  private TEMPLATE_ID = 'template_iv38h4a';
  private PUBLIC_KEY  = 'JwsU9-NEYZ6mSMv5k';

  contactLinks: { icon: string; label: string; value: string; href: string }[] = [];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getData().subscribe(d => {
      this.personal = d.personal;
      this.contactLinks = [
        {
          icon: 'email',
          label: 'Email',
          value: d.personal.email,
          href: `mailto:${d.personal.email}`
        },
        {
          icon: 'github',
          label: 'GitHub',
          value: d.personal.github.replace('https://', ''),
          href: d.personal.github
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          value: d.personal.linkedin.replace('https://', ''),
          href: d.personal.linkedin
        }
      ];
    });

    // Initialize EmailJS with your public key
    emailjs.init(this.PUBLIC_KEY);
  }

  onSubmit(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    this.sending = true;
    this.error = false;

    const templateParams = {
      from_name:  this.form.name,
      from_email: this.form.email,
      subject:    this.form.subject || 'No subject',
      message:    this.form.message
    };

    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams)
      .then(() => {
        this.sending   = false;
        this.submitted = true;
        this.form = { name: '', email: '', subject: '', message: '' };
      })
      .catch(() => {
        this.sending = false;
        this.error   = true;
      });
  }
}