import { LabelCreateComponent } from './../dialog/label-create/label-create.component';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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

  labelsRows: any = [];
  userEmail: string;

  clickedItem = 0;

  constructor(private dialog: MatDialog,
    private headerService: HeaderService,
    private mainService: MainService,
    private _snackBar: MatSnackBar,
    private router: Router,

    ) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('username');
    this.sidebar();
  }

  clickOnItem(itemNumber) {
    this.clickedItem = itemNumber;
  }

  manageLabel() {
    this.router.navigate(['manage-label'])
  }

  createLabel() {
    const dialogRef = this.dialog.open(LabelCreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }

  inbox() {
    this.router.navigate([''])
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

  ngOnDestroy() {
    this.sidebarSubscription.unsubscribe();
    this.allLabelSubs.unsubscribe();
  }
}
