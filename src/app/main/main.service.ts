import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { SharedService } from './../shared/shared.service';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  allLabel = new BehaviorSubject<any>(null);
  tableSnackbar = new BehaviorSubject<boolean>(false);
  snackbar = new BehaviorSubject<string>(null);

  constructor(private sharedService: SharedService) {

  }


}
