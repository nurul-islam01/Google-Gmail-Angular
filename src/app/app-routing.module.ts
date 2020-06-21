import { ManageLabelComponent } from './main/manage-label/manage-label.component';
import { DetailsComponent } from './main/details/details.component';
import { MailTableComponent } from './main/mail-table/mail-table.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';



const routes: Routes = [

  { 
    path: '', 
    component:MainComponent,

    children: [
      {
        path: '',
        component: MailTableComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      
      {
        path: 'manage-label',
        component: ManageLabelComponent
      },

    ]
  }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}