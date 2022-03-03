import { Component } from '@angular/core';
import { WikipediaResponse, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wsearch';
  pages: WikipediaResponse['query']['search'] = [];

  constructor(private wikiService: WikipediaService) {}

  onTerm(term: string) {
    this.wikiService.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
