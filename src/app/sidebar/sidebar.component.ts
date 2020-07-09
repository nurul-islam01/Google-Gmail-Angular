import { SidebarService } from './sidebar.service';
import { LabelCreateComponent } from './../dialog/label-create/label-create.component';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MainService } from '../main/main.service';
import { Label } from './../models/label.model';
import { HeaderService } from './../header/header.service';
import { ifError } from 'assert';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private sidebarSubscription: Subscription;
  private allLabelSubs: Subscription;
  activeSidebar = false;
  lable = false;
  blob;

  cOpenClose = false;

  labelsRows: any = [];
  userEmail: string;

  clickedItem = 0;

  constructor(private dialog: MatDialog,
    private headerService: HeaderService,
    private mainService: MainService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private sidebarService: SidebarService,
    ) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('username');
    this.sidebar();
  }

  composeBox() {
    this.cOpenClose = !this.cOpenClose;
    this.sidebarService.composeClick(this.cOpenClose);
  }

  clickOnItem(itemNumber) {
    this.clickedItem = itemNumber;
  }

  manageLabel() {
    this.clickedItem = 11;
    // this.router.navigate(['manage-label'])
  }

  createLabel() {
    this.clickedItem = 13;
    const dialogRef = this.dialog.open(LabelCreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }

  compnayContact() {
    this.clickedItem = 1
    this.openSnackBar("Loading Email", "")
  }

  getAllLabels() {
    this.allLabelSubs = this.mainService.allLabel.subscribe(result => {
      this.labelsRows = result
    }, er => console.log(er));
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private sidebar() {
    this.sidebarSubscription = this.headerService.getSidebarActive().subscribe(active => {
      this.activeSidebar = active;
    });
  }

  labelShowing() {
    this.lable = !this.lable;
  }



  onStarred() {
    this.clickedItem = 1;
   this.sidebarService.onStarred();
  }

  onInbox() {
    this.clickedItem = 0;
    this.router.navigate([''])
    this.sidebarService.onInbox();
  }
  
  onSnoozed() {
    this.clickedItem = 2;
    this.sidebarService.onSnoozed();
  }
  
  onSend() {
    this.clickedItem = 3;
    this.sidebarService.onSend();
  }
  
  onDraft() {
    this.clickedItem = 4;
    this.sidebarService.onDraft();
  }
  
  onTrash() {
    this.clickedItem = 5;
    this.sidebarService.onTrash();
  }
  
  onJunk() {
    this.clickedItem = 6;
    this.sidebarService.onJunk();
  }
  
  onJunkEmail() {
    this.clickedItem = 7;
    this.sidebarService.onJunkEmail();
  }
  
  onUnWanted() {
    this.clickedItem = 8;
    this.sidebarService.onUnWanted();
  }

  onImportant() {
    this.clickedItem = 9;
    this.sidebarService.onImportant();
  }



  onAllMail() {
    this.clickedItem = 10;
    this.sidebarService.onAllMail()
  }

  onSpam() {
    this.clickedItem = 11;
    this.sidebarService.onSpam();
  }

  ngOnDestroy() {
    this.sidebarSubscription.unsubscribe();
    this.allLabelSubs.unsubscribe();
  }
}
