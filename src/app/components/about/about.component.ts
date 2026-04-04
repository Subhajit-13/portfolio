import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  personal: PersonalInfo | null = null;

  facts = [
    { icon: '📍', label: 'Location',  key: 'location' },
    { icon: '💼', label: 'Status',    value: 'Open to Opportunities' },
    { icon: '⚡', label: 'Focus',     value: 'Angular + Python Flask' },
    { icon: '🎯', label: 'Goal',      value: 'Become a confident Full Stack Dev' }
  ];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getData().subscribe(d => this.personal = d.personal);
  }

  getValue(fact: any): string {
    if (fact.key && this.personal) {
      return (this.personal as any)[fact.key];
    }
    return fact.value;
  }
}
