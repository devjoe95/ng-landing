import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent {
  messages$: Observable<Message[]>;
  constructor(private notificationsService: NotificationsService) {
    this.messages$ = notificationsService.messagesOutput;
    // setTimeout(() => {
    //   notificationsService.addSuccessMessage('OK OK you are got lucky.');
    // }, 3000);
    // setTimeout(() => {
    //   notificationsService.addErrorMessage(
    //     'Error ... you are not lucky at all.'
    //   );
    // }, 1000);
    // setTimeout(() => {
    //   notificationsService.addSuccessMessage(
    //     'Hello everyone,I am from egypt, And I would like to do projects with you all.'
    //   );
    // }, 10000);
    // setTimeout(() => {
    //   notificationsService.addSuccessMessage('OK OK you are got lucky');
    // }, 8000);
  }

  clearMessage(id: number) {
    this.notificationsService.clearMessage(id);
    console.log(id);
  }
}
