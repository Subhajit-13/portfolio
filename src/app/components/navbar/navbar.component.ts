import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  name = '';
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'About',       href: '#about' },
    { label: 'Skills',      href: '#skills' },
    { label: 'Journey',     href: '#journey' },
    { label: 'Experience',  href: '#experience' },
    { label: 'Projects',    href: '#projects' },
    { label: 'Contact',     href: '#contact' }
  ];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getData().subscribe(d => this.name = d.personal.name);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }
}
