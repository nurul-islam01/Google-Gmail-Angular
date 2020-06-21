
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './main/details/details.component';
import { MailTableComponent } from './main/mail-table/mail-table.component';
import { ComposeBoxComponent } from './main/compose-box/compose-box.component';
import { ManageLabelComponent } from './main/manage-label/manage-label.component';
import { LabelCreateComponent } from './dialog/label-create/label-create.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

// const appRoutes: Routes = [
//   { path: '', component:MainComponent },
//   {  path: 'logout',component: PageLogoutComponent}   
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    DetailsComponent,
    MailTableComponent,
    ComposeBoxComponent,
    ManageLabelComponent,
    LabelCreateComponent,
    RightSidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    // [RouterModule.forRoot(appRoutes)],
  ],
  
  
  entryComponents: [LabelCreateComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
