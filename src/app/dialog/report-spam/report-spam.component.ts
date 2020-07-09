import { PeriodicElement } from './../../main/main.component';
import { DialogService } from './../dialog.service';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-report-spam',
  templateUrl: './report-spam.component.html',
  styleUrls: ['./report-spam.component.css']
})
export class ReportSpamComponent implements OnInit, AfterViewInit {

  constructor(public dialogRef: MatDialogRef<ReportSpamComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private dialogService: DialogService) { }


  ngAfterViewInit(): void {
    (document.querySelector('.mat-dialog-container') as HTMLElement).style.padding = '20px';
  }

  ngOnInit() {
  }

  onSpamUnsubscripbe() {
    this.dialogService.spamAndUnsubscribe(this.data);
    this.dialogRef.close()
  }

  onSpam() {
    this.dialogService.spam(this.data);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
