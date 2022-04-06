import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck, Subject, switchMap, tap } from 'rxjs';

export interface Article {
  title: string;
  url: string;
  description: string;
}

interface GlobalNewsResponse {
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root',
})
export class GlobalNewsService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private API_KEY = '1ed0ae8262be4158be81fe7fae5bd7c8';
  private country = 'us';

  pageInput: Subject<number>;
  pageOutput: Observable<Article[]>;
  numOfArticles: Subject<number>;

  constructor(private http: HttpClient) {
    this.numOfArticles = new Subject();
    this.pageInput = new Subject();
    this.pageOutput = this.pageInput.pipe(
      map((page) => {
        return new HttpParams()
          .set('apiKey', this.API_KEY)
          .set('country', this.country)
          .set('pageSize', this.pageSize)
          .set('page', page);
      }),
      switchMap((params) => {
        return this.http.get<GlobalNewsResponse>(this.url, { params });
      }),
      tap((response) => {
        this.numOfArticles.next(response.totalResults);
      }),
      pluck('articles')
    );
  }
  getPage(page: number) {
    this.pageInput.next(page);
  }
}
