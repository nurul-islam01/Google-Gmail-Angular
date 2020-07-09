import { LabelCreateComponent } from './../../dialog/label-create/label-create.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialog } from '@angular/material';
import { ComposeLinkComponent } from 'src/app/dialog/compose-link/compose-link.component';


export interface Fruit {
  email: string;
}

export interface EmailB{
  name: string;
  email: string;
  to: string;
  title: string;
  photo?: string;
  textBody: string;
  file?: string[];
}


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  mailBodyHtml: any;
  name = 'LinkedIn';
  mailBody = `
  <h1>Privacy Policy for dumy</h1>

  <p>At dummy.com, accessible from lajflsjfs, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by dummy.com and how we use it.</p>
  
  
  <p>dummy.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
  `;

  signature = `

  <!DOCTYPE html>
  <html>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
  <body>
  <table style="width: 60%">
    <tbody>
      <tr>
        <td>
        <table>
          <tbody>
            <tr>
              <td style="padding: 0 5px 0 0"><img src="http://nassa.com.bd/email_signature/logo.png" /></td>
              <td style="padding: 0 0 0 10px; border-left: solid 1px #0d004c;">
              <h1 style=" font-family: Helvetica Neue,Helvetica; font-weight: bold; padding:0; line-height:20px;  font-size: 1em; margin: 0 0 5px 0; color: #231f20;"><a  href="https://faisalcse1.gitlab.io/home/" target="_blank">MD FAISAL<a/></h1>
  
              <h2 style="font-family: Helvetica Neue,Helvetica; font-weight: bold; font-size: 1em; padding:0; margin: 0 0 5px 0; color: #76787a;">Software Engineer</h2>
  
              <table style="margin: 0 0 5px 0;">
                <tbody>
                  
                  <tr>
                    <td><img src="http://nassa.com.bd/email_signature/Cell.png" /></td>
                    <td><a href="tel:+8801679697792" style="color: #3c9fff; font-size: 0.9em;">+88 01679697792</a></td>
                  </tr>
                  <tr>
                    <td><img src="http://nassa.com.bd/email_signature/E-Mail.png" /></td>
                    <td><a href="mailto:m.faisal@nassagroup.org" style="color: #3c9fff; font-size: 0.9em;">m.faisal@nassagroup.org </a></td>
                  </tr>
                </tbody>
              </table>
  
              <table>
                <tbody>
                  <tr>
                    <td style="vertical-align:middle; padding:  0 10px 0 0; "><a href="https://www.nassa.com.bd/"><img src="http://nassa.com.bd/email_signature/Web.png" /> </a></td>
                    <td style="vertical-align:middle; padding:  0 10px 0 0; "><a href="https://www.facebook.com/nassagroup.org/"><img src="http://nassa.com.bd/email_signature/Facebook.png" /> </a></td>
                    <td style="vertical-align:middle; padding:  0 10px 0 0; "><a href="https://www.linkedin.com/company/nassa-group"><img src="http://nassa.com.bd/email_signature/IN.png" /> </a></td>
                  </tr>
                </tbody>
              </table>
              </td>
            </tr>
          </tbody>
        </table>
        </td>
      </tr>
      <tr>
        <td style="font-family: Helvetica Neue,Helvetica; font-size: 0.7em; text-align:left; color:#b1b3b5"><span style="color:#00a550;">Please consider the environment before printing this email</span><br />
        This communication contains information from Nassa Group that may be confidential. Except for personal use by the intended recipient, or as expressly authorized by the sender, any person who receives this information is prohibited from disclosing, copying, distributing, and/or using it. If you have received this communication in error, please immediately delete it and all copies, and promptly notify the sender.Nothing in this communication is intended to operate as an electronic signature under applicable law.<br />
        <br />
        <span style="color:#58585b;">NASSA GROUP CONFIDENTIAL AND PROPRIETARY INFORMATION</span><br />
        <br />
        The contents of this material are confidential and proprietary to Nassa Group and may not be reproduced, disclosed, distributed or used without the express permission of an authorized representative of Nassa Group. Any other use is expressly prohibited.</td>
      </tr>
    </tbody>
  </table>
  </body>
  </html>
  
  `

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  isClipShow = false;
  editorContent: any;
  isReplyShow:boolean = false;

  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  doc = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc';
  xl = 'https://docs.google.com/spreadsheets/d/1ttTVX16VmWv-MSOU__wXgjhPKr9eJk8B8faYchfQYdI/edit#gid=743753532';

  replyName: string = 'Freelancer.com';
  replyEmail:string = 'noreply@updates.freelancer.com';
  fromDate: string = 'Tue, Jul 7, 2020 at 10:12 AM';
  replySubject: string = 'Kanye West for President? Show us YOUR ideas and win $1,000 USD!';
  replyTo: string = 'nurul.islam3f@gmail.com';

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {email: 'invitations@linkedin.com'},
  
  ];

  replyFrom: FormGroup;

  editorStyle = {
    height: '200px'
  };
  
  searchForm:FormGroup;
  label: string;
  isSignatureShow = false;

  labels = ['[Imap]/Trash', "Social", "Junk", "Junk Email", "Unwanted", "Update", "Forums", "Promotions"];

  constructor(private sanitizer: DomSanitizer, private router: Router, private fb: FormBuilder,  private dialog: MatDialog,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private http: HttpClient) {

  }

  ngOnInit() {
    this.mailBodyHtml = this.sanitizer.bypassSecurityTrustHtml(this.mailBody)
    this.replyFrom = this.fb.group({
      replyTo: ['', [Validators.required]],
      replyEditor: [''],
      file: [''],
      image: [''],
      signature: ['']
    })
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngAfterViewInit(): void {
    // (document.querySelector('.mat-standard-chip') as HTMLElement).style.minHeight = '20px';
    
    // this.sigElRef.nativeElement.insertAdjacentHTML('beforeend', '<div [innerHtml]="signature"></div>')
    
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

  onPrint(): void {
    let printContents, popupWin;
    printContents = document.getElementById('fullMailView').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>${this.name}</title>
          <style>
         
          </style>
        </head>
      <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

  signatureAdd() {
    var d1 = this.elementRef.nativeElement.querySelector('.ql-editor');
    d1.insertAdjacentHTML('afterend', '<div class="singnature" [innerHtml]>'+this.signature+'</div>');
  }

  // removeSignature() {
  //   var d1 = this.elementRef.nativeElement.querySelector('.singnature');
  //   d1.remove();
  // }

  onStar(value: boolean) {

  }

  // onReply(){
  //   this.isReplyShow = true;
  //   this.signatureAdd();
  // }

  // onForward() {
  //   this.isReplyShow = true;
  //   this.addAllToBox();
  //   this.signatureAdd();
  // }

  onForward() {
    this.isReplyShow = true;
    this.clearBox();
    this.addForwardBox();
    if(!this.isSignatureShow) {
      this.signatureAdd();
    }
  }

  onReply() {
    this.isReplyShow = true;
    this.clearBox();
    if(!this.isSignatureShow) {
      this.signatureAdd();
    }
  }

  discardDraft() {
    this.isReplyShow = false;
    this.clearBox();
  }

  addForwardBox() {
    this.isSignatureShow = true;
    let forMsg = `<br><br><br>  <div style="font-size: 12px;">---------- Forwarded message ---------<br>From: <strong >${this.replyName}</strong> <span>&lt;${this.replyEmail}&gt;</span><br>Date: ${this.fromDate}<br>Subject: ${this.replySubject}<br>To:  &lt;${this.replyTo}&gt;<br></div><br><br>`
    this.editorContent = forMsg + this.mailBody + '<br><br>';
  }

  clearBox() {

    // this.removeSignature();

    if(this.editorContent) {
      this.editorContent = "";
    }
 
  }

  onSend() {
    let v = this.replyFrom.get('replyEditor').value + "<br><br><br>" + this.signature;
    console.log(v);
    
  }

  uploadSignature(event) {
    let fileList:FileList = event.target.files;
  }

  uploadFileToServer(event) {

    let fileList:FileList = event.target.files;

    let n = fileList.length;

    for(let i = 0; i < n; i++) {
      let file:File = fileList[i];
      // this.fileUploads.push({name: file.name, size: this.formatSizeUnits(file.size), percentage: 10});
    }
    
  }

  removeUploadItem(i: number) {
    // this.fileUploads.splice(i, 1);
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
    // this.editorShow = !this.editorShow; 
    // console.log(this.editorShow);
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({email: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  onArchive() {
    this.router.navigate([''])
  }

  onSpam() {
    this.router.navigate([''])
  }

  onDelete() {

  }

  onUnread() {
    this.router.navigate([''])
  }

  onSnooze() {
    this.router.navigate([''])
  }

  onAddToMask() {

  }

  onMoveTo() {
    this.router.navigate([''])
  }


  onImportant(value: boolean) {
    this.router.navigate([''])
  }

  onCreateEvent() {

  }

  onFilterMessageLikeThis() {

  }

  onMute() {
    this.router.navigate([''])
  }

  onNewer() {

  }

  onOlder() {

  }


  backToMailBox() {
    this.router.navigate([''])
  }

  clipShow() {
    this.isClipShow = !this.isClipShow
  }

}
