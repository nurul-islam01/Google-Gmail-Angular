import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

import { from } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ComposeLinkComponent } from './../../dialog/compose-link/compose-link.component';
import { SidebarService } from './../../sidebar/sidebar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogService } from './../../dialog/dialog.service';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.css']
})
export class ComposeBoxComponent implements OnInit, AfterViewInit {

  composeForm: FormGroup;
  searchForm:FormGroup;
  label: string;
  recipentVisibility = true;

  singleFileVisibility = false;
  fileUploads: Array<FileUpload> = [];

  @ViewChild('editor', {static: false}) editor:ElementRef;


  editorShow = false;

  public Editor = BalloonEditor;
  
  editorConfig = {
    toolbar: ['heading', '|', 'fontSize', 'fontFamily', '|', 'bold', 'italic', 'underline', 'strikethrough', 'link', '|', 'alignment:left', 'alignment:center', 'alignment:right', '|', 'numberedList', 'bulletedList', '|', 'ckfinder', 'insertTable', '|', 'undo', 'redo'],
    placeholder: ''
  };


  isExpand: boolean = true;

  labels = ['[Imap]/Trash', "Social", "Junk", "Junk Email", "Unwanted", "Update", "Forums", "Promotions"];

  constructor(private fb: FormBuilder, 
    private sidebarService: SidebarService,
    private dialogService: DialogService,
    private dialog: MatDialog,
    private elRef: ElementRef,
    ) { }


  ngOnInit() {


    this.composeForm = this.fb.group({
      to: ['', Validators.required],
      subject: [''],
      messageBody: ['', Validators.required],
      file: [''],
      image: ['']
    })

    this.searchForm = this.fb.group({
      search: ['']
    });
   
    
  }


  labelFilter(value:string) {
    if(value) {
      this.labels = this.labels.filter(i => {
        i.toLowerCase().startsWith(value.toLowerCase());
      })
    } else {
      this.labels = ['[Imap]/Trash', "Social", "Junk", "Junk Email", "Unwanted", "Update", "Forums", "Promotions"];
    }
    
  }



  uploadFileToServer(event) {

    let fileList:FileList = event.target.files;

    let n = fileList.length;

    for(let i = 0; i < n; i++) {
      let file:File = fileList[i];
      this.fileUploads.push({name: file.name, size: this.formatSizeUnits(file.size), percentage: 10});
    }
    
  }

  removeUploadItem(i: number) {
    this.fileUploads.splice(i, 1);
  }

  formatSizeUnits(bytes) {
    if ( ( bytes >> 30 ) & 0x3FF )
        bytes = ( bytes >>> 30 ) + '.' + ( bytes & (3*0x3FF )) + ' GB' ;
    else if ( ( bytes >> 20 ) & 0x3FF )
        bytes = ( bytes >>> 20 ) + '.' + ( bytes & (2*0x3FF ) ) + ' MB' ;
    else if ( ( bytes >> 10 ) & 0x3FF )
        bytes = ( bytes >>> 10 ) + '.' + ( bytes & (0x3FF ) ) + ' KB' ;
    else if ( ( bytes >> 1 ) & 0x3FF )
        bytes = ( bytes >>> 1 ) + ' Bytes' ;
    else
        bytes = bytes + ' Byte' ;
    return bytes ;
  }

  focusSerch() {
    const searchInput = this.elRef.nativeElement.querySelector('#search');
    if (searchInput instanceof HTMLElement) {
      searchInput.focus();
    }
  }

  toggleTitle() {
    this.isExpand = !this.isExpand;
    (document.querySelector(".compose-card") as HTMLElement).style.width = this.isExpand ? '62vh': '30vh';
  }

  closeCompose() {
    this.sidebarService.composeClick(false);
  }

  ngAfterViewInit(): void {
    // (document.querySelector(".ck-content") as HTMLElement).style.padding = '0px';


  }
  
  stopPropagation(event){
    event.stopPropagation();
  }

  composeLink() {

    const dialogRef = this.dialog.open(ComposeLinkComponent, {
      width: '600px',
      height: '345px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.data !== undefined) {
        const link: string = result.data;
        
        let el = document.getElementById('editor');
        
      }      
    });
  }

  formatingText() {
    this.editorShow = !this.editorShow; 
    console.log(this.editorShow);
  }

  recipentClick() {
     this.recipentVisibility = false;
  }

  toFocusOut() {
    this.recipentVisibility = this.composeForm.get('to').value ? false : true;
  }



}