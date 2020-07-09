import { from } from 'rxjs';

import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { ComposeLinkComponent } from './dialog/compose-link/compose-link.component';
import { FilterlabelsPipe } from './pipes/filterlabels.pipe';
import { UploadFileComponent } from './dialog/upload-file/upload-file.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReportSpamComponent } from './dialog/report-spam/report-spam.component';
import { SnoozeDateTimeComponent } from './dialog/snooze-date-time/snooze-date-time.component';
import { QuillModule } from 'ngx-quill'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';


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
    ComposeLinkComponent,
    FilterlabelsPipe,
    UploadFileComponent,
    ReportSpamComponent,
    SnoozeDateTimeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CKEditorModule,
    PdfViewerModule,
    NgxDocViewerModule,
    QuillModule.forRoot(),
    // [RouterModule.forRoot(appRoutes)],
  ],
  
  
  entryComponents: [LabelCreateComponent, ComposeLinkComponent, UploadFileComponent, ReportSpamComponent, SnoozeDateTimeComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
