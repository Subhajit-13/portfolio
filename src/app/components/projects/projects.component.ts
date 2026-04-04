import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  showAll = false;

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getData().subscribe(d => this.projects = d.projects);
  }

  get visibleProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.filter(p => p.featured);
  }

  statusColor(status: string): string {
    const map: Record<string, string> = {
      'live':        '#00d4aa',
      'in-progress': '#6c63ff',
      'archived':    '#555577'
    };
    return map[status] || '#555577';
  }

  statusLabel(status: string): string {
    const map: Record<string, string> = {
      'live':        '● Live',
      'in-progress': '◉ In Progress',
      'archived':    '○ Archived'
    };
    return map[status] || status;
  }
}
