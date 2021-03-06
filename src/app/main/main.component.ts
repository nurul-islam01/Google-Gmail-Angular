import {Component, OnInit, OnDestroy} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Subscription, from } from 'rxjs';
import { Label } from './../models/label.model';
import { MainService } from './main.service';
import { HeaderService } from '../header/header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';

export interface PeriodicElement {
  name: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'After a recent review, we found that your app খোয়াবনামা – আখতারুজ্জামান ইলিয়াস (com.nit.khowabnamabangla) is not compliant with one or more of our Developer Program Policies. See below for more information about your app’s status and how to correct the issue.See below for more information about your app’s status and how to correct the issue.'},
  {name: 'Helium'},
  {name: 'Lithium'},
  {name: 'Beryllium'},
  {name: 'Boron'},
  {name: 'Carbon'},
  {name: 'Nitrogen'},
  {name: 'Oxygen'},
  {name: 'Fluorine'},
  { name: 'Neon'},
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Lithium'},
  {name: 'Beryllium'},
  {name: 'Boron'},
  {name: 'Carbon'},
  {name: 'Nitrogen'},
  {name: 'Oxygen', },
  {name: 'Fluorine'},
  { name: 'Neon'},
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Lithium'},
  {name: 'Beryllium'},
  {name: 'Boron'},
  {name: 'Carbon'},
  {name: 'Nitrogen'},
  {name: 'Oxygen'},
  {name: 'Fluorine'},
  { name: 'Neon'},
];


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  isComposeOpen: boolean = false;

  constructor(private sidebarService: SidebarService) {
    
  }

  ngOnInit(): void {
    
    this.sidebarService.compose.subscribe(result => {
      this.isComposeOpen = result;
    });
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
