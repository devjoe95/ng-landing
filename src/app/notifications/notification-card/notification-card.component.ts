import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../notifications.service';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css'],
})
export class NotificationCardComponent implements OnInit {
  @Input() message: Message;
  @Output() clearAction = new EventEmitter<number>();
  bar_value = 0;

  constructor() {
    this.message = { id: 0, text: '', type: 'success' };
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.bar_value >= 100) {
        this.bar_value = 0;
      }
      this.bar_value += 1;
    }, 49);
  }
  clearMessage(id: number) {
    this.clearAction.emit(id);
  }
}
