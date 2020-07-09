import { SharedService } from './../shared/shared.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { MainService } from './../main/main.service';
import { HeaderService } from './header.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  isOpen = false;
  
  constructor(private headerService: HeaderService, private mainService: MainService, private _snackBar: MatSnackBar,private sharedService: SharedService) { }

  ngOnInit() {
    
  }

  logout() {
    localStorage.clear();
    setTimeout(() => {
    this.sharedService.getLucid('api/Module/LogOutUrl?url=http://175.29.197.27:81/logout').subscribe(data=>{
      var logOutUrl=data;

    var splitedData=logOutUrl.toString().split(',');
    var returnUrl=splitedData[0];
    var restUrl=logOutUrl.toString().replace(returnUrl+",",'')
    console.log(returnUrl);
    console.log(restUrl);
    window.location.href=returnUrl+"?token="+restUrl
  
      })
    }, 300);

  }

  applyFilter(filterValue: string) {
    this.headerService.searchData(filterValue.trim().toLowerCase());    
  }

  toggleSideNav() {
    this.isOpen = !this.isOpen;
    this.headerService.setSibarActive(this.isOpen);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
