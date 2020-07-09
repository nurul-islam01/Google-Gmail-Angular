import { PeriodicElement } from './../main/main.component';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  link = new Subject<string>();
  spamUnsubscribeSubject = new Subject<PeriodicElement[]>();
  spamSubject = new Subject<PeriodicElement[]>();
  
  constructor() { }

  saveLink(value: string) {
    this.link.next(value);
  }

  spamAndUnsubscribe(value) {
    this.spamUnsubscribeSubject.next(value);
  }

  spam(value) {
    this.spamSubject.next(value);
  }
}
