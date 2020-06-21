import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private sidebarActive = new BehaviorSubject<boolean>(false);
  searchObserable = new BehaviorSubject<string>(null);

  constructor() { }

  setSibarActive(active) {
    this.sidebarActive.next(active);
  }

  searchData(data) {
    this.searchObserable.next(data);
  }

  getSidebarActive(): Observable<boolean> {
    return this.sidebarActive.asObservable();
  }


}
