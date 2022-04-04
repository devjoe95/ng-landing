import { Injectable } from '@angular/core';
import { Observable, scan, Subject } from 'rxjs';

export interface Message {
  id: number;
  text?: string;
  type: 'success' | 'error' | 'clear';
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  messagesInput: Subject<Message>;
  messagesOutput: Observable<Message[]>;
  constructor() {
    this.messagesInput = new Subject<Message>();
    this.messagesOutput = this.messagesInput.pipe(
      scan((acc: Message[], val: Message) => {
        if (val.type === 'clear') {
          return acc.filter((message) => message.id !== val.id);
        } else {
          return [...acc, val];
        }
      }, [])
    );
  }

  addSuccessMessage(message: string) {
    const id = +new Date().getTime();
    this.messagesInput.next({
      id,
      text: message,
      type: 'success',
    });
    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }
  addErrorMessage(message: string) {
    const id = +new Date().getTime();
    this.messagesInput.next({
      id,
      text: message,
      type: 'error',
    });
    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }
  clearMessage(id: number) {
    this.messagesInput.next({ id, type: 'clear' });
  }
}
