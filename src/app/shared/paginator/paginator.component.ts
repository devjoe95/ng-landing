import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() numOfArticles: number = 1;
  @Output() navigate: EventEmitter<number> = new EventEmitter();
  pageEvent: PageEvent = {
    pageIndex: 1,
    pageSize: 10,
    length: this.numOfArticles,
  };
  constructor() {}
  public getServerData(event: PageEvent) {
    this.navigate.emit(event.pageIndex);
    return event;
  }
}
