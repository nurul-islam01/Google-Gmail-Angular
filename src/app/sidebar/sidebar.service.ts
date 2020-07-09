import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  compose = new Subject<boolean>();
  leftMenuActive = new Subject<string>();

  constructor() { }

  composeClick(value:boolean) {
    this.compose.next(value);

  }

  onStarred() {
    this.leftMenuActive.next('starred');
  }

  onInbox() {
    this.leftMenuActive.next('inbox');
  }
  
  onSnoozed() {
    this.leftMenuActive.next('snoozed');
  }
  
  onSend() {
    this.leftMenuActive.next('send');
  }
  
  onDraft() {
    this.leftMenuActive.next('draft');
  }
  
  onTrash() {
    this.leftMenuActive.next('trash');
  }
  
  onJunk() {
    this.leftMenuActive.next('junk');
  }
  
  onJunkEmail() {
    this.leftMenuActive.next('junkEmail');
  }
  
  onUnWanted() {
    this.leftMenuActive.next('unwanted');
  }

  onImportant() {
    this.leftMenuActive.next('important');
  }

  onSpam() {
    this.leftMenuActive.next('spam');
  }

  onAllMail() {
    this.leftMenuActive.next('allMail');
  }


}
