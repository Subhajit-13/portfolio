import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

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
  }

  onSubmit(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    // Wire this up to your Flask backend or EmailJS later
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 1200);
  }
}
