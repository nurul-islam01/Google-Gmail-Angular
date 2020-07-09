import { HeaderService } from './../../header/header.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Subscription, from } from 'rxjs';
import { ReportSpamComponent } from 'src/app/dialog/report-spam/report-spam.component';
import { SnoozeDateTimeComponent } from './../../dialog/snooze-date-time/snooze-date-time.component';
import { SidebarService } from './../../sidebar/sidebar.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LabelCreateComponent } from 'src/app/dialog/label-create/label-create.component';

export interface PeriodicElement {
  name: string;
  isStarred: boolean,
  isRead: boolean;
  hasFile: boolean;
  isSpam: boolean;
  isTrush: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: false, hasFile: false, isSpam: true, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: false, isRead: true, hasFile: true,  isSpam: false, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: false, hasFile: false,  isSpam: false, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: false, isRead: false, hasFile: true,  isSpam: true, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: false, hasFile: false,  isSpam: false, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: true, hasFile: true,  isSpam: false, isTrush: true},
  
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: false, hasFile: false, isSpam: true, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: false, isRead: true, hasFile: true,  isSpam: false, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: false, hasFile: false,  isSpam: false, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: false, isRead: false, hasFile: true,  isSpam: true, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: false, hasFile: false,  isSpam: false, isTrush: false},
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.', isStarred: true, isRead: true, hasFile: true,  isSpam: false, isTrush: true},
  
];


@Component({
  selector: 'app-mail-table',
  templateUrl: './mail-table.component.html',
  styleUrls: ['./mail-table.component.css']
})
export class MailTableComponent implements OnInit {

  isStared = false;
  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.filter(item => (item.isSpam === false && item.isTrush === false)));
  selection = new SelectionModel<PeriodicElement>(true, []);
  searchForm:FormGroup;
  label: string;

  labels = ['[Imap]/Trash', "Social", "Junk", "Junk Email", "Unwanted", "Update", "Forums", "Promotions"];


  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog, private sidebarService: SidebarService, private headerService: HeaderService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
   
    this.sidebarService.leftMenuActive.subscribe((res) => {
      if(res == 'starred') {
        console.log(res)
        this.starred()
      } else if(res == 'inbox') {
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.filter(item => item.isSpam === false));
      } else if(res == 'spam') {
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.filter(item => item.isSpam === true));
      } else if(res == 'trash') {
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.filter(item => item.isTrush === true));
      } else if(res == 'allMail') {
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      }
    })
    this.getWeekend();

    this.headerService.searchObserable.subscribe(result => {
      if(result) {
        this.dataSource.filter = result;
      } else {
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.filter(item => (item.isSpam === false && item.isTrush === false)));

      }
    });
  }

  stopPropagation(event){
    event.stopPropagation();
  }

  createLabel() {
    const dialogRef = this.dialog.open(LabelCreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }

  snoozeSelect() {
    const dialogRef = this.dialog.open(SnoozeDateTimeComponent, {
      width: '500px',
      height: '370px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }

  getDate(hour) {

    let date = new Date(); 
    // date.setHours(hour);

    let t1 = date.getTime();
    let newTime = t1 + (1000*60*60*hour);
    let newDate = new Date(newTime);

    return this.getDayTime(newDate);
  }

  getWeekend() {

    let dt = new Date();
    let currentWeekDay = dt.getDay();
    let lessDays = currentWeekDay == 0 ? 6 : currentWeekDay-1
    let wkStart = new Date(new Date(dt).setDate(dt.getDate()- lessDays));
    let date = new Date(new Date(wkStart).setDate(wkStart.getDate()+4));
    
    return this.getDayTime(date);
  }
  
  getDayTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? +minutes : minutes;
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const time = days[date.getDay()] + ", " + hours + ":" + minutes + " " + ampm;
    return time;
  }
  

  detailsPage() {
    this.router.navigate(['/details']);
  }

  starred() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA.filter(i => i.isStarred));
  }

  onStar(row: PeriodicElement, isStarred: boolean) {
    const index = ELEMENT_DATA.indexOf(row);
    ELEMENT_DATA[index].isStarred = isStarred;
  }

  onDelete(row: PeriodicElement, i: number) {
    this.dataSource.data = this.removeItemOnce(this.dataSource.data, row);
  }

  removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  onRead(i: number, isRead: boolean) {
    this.dataSource.data[i].isRead = isRead;
  }

  onReport() {
    const dialogRef = this.dialog.open(ReportSpamComponent, {
      width: '500px',
      data: this.selection
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }

  onMarkDelete() {

    let d: PeriodicElement[] = this.dataSource.data;
    
    this.selection.selected.forEach(i => {
      this.removeItemOnce(d, i);
      
    });
    this.selection.clear();
    this.dataSource = new MatTableDataSource<PeriodicElement>(d);
    
  }

  onClearSelected() {
    this.selection.clear();
  }

  onReadSelected() {
    this.selection.selected.forEach((item) => {
     item.isRead = true;
    });
    this.selection.clear();
    // this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }
  onUnReadSelected() {
    this.selection.selected.forEach((item, index) => {
      ELEMENT_DATA[index].isRead = false
    });
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }

  onStarredSelected() {
    this.selection.selected.forEach((item, index) => {
      ELEMENT_DATA[index].isStarred = true
    });
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }

  
  onUnStarredSelected() {
    this.selection.selected.forEach((item, index) => {
      ELEMENT_DATA[index].isStarred = false
    });
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement, i?: number): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${i + 1}`;
  }

}
