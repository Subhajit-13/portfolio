import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private dataUrl = 'assets/data/portfolio.json';

  // Cache the HTTP call so JSON is only fetched once
  private data$: Observable<PortfolioData> = this.http
    .get<PortfolioData>(this.dataUrl)
    .pipe(shareReplay(1));

  constructor(private http: HttpClient) {}

  getData(): Observable<PortfolioData> {
    return this.data$;
  }
}
