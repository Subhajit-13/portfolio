import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillSet } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: SkillSet | null = null;

  categories = [
    { key: 'frontend', label: 'Frontend',  icon: '🎨', color: '#6c63ff' },
    { key: 'backend',  label: 'Backend',   icon: '🐍', color: '#00d4aa' },
    { key: 'tools',    label: 'Tools',     icon: '🔧', color: '#ff6b9d' }
  ];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getData().subscribe(d => this.skills = d.skills);
  }

  getSkills(key: string): any[] {
    if (!this.skills) return [];
    return (this.skills as any)[key] || [];
  }

  levelLabel(level: number): string {
    if (level >= 80) return 'Advanced';
    if (level >= 60) return 'Proficient';
    if (level >= 40) return 'Intermediate';
    return 'Learning';
  }
}
