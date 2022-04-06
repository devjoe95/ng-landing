import { Component, OnInit } from '@angular/core';
import { Article, GlobalNewsService } from '../global-news.service';

@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrls: ['./global-news.component.css'],
})
export class GlobalNewsComponent implements OnInit {
  panelOpenState = false;
  numOfArticles: number = 1;
  articles: Article[] = [];
  constructor(private globalNewsService: GlobalNewsService) {
    this.globalNewsService.pageOutput.subscribe((articles) => {
      this.articles = articles;
    });
    this.globalNewsService.numOfArticles.subscribe((number) => {
      this.numOfArticles = number;
    });
  }
  ngOnInit(): void {
    this.globalNewsService.getPage(1);
  }
  navigate(pageNumber: number) {
    this.globalNewsService.getPage(pageNumber + 1);
  }
}
