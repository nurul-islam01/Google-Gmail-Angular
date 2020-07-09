import { DialogService } from './../dialog.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compose-link',
  templateUrl: './compose-link.component.html',
  styleUrls: ['./compose-link.component.css']
})
export class ComposeLinkComponent implements OnInit {

  linkForm: FormGroup;
  isLink: string = 'text';
  submitedLink: string;

  constructor( public dialogRef: MatDialogRef<ComposeLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data, 
    private fb: FormBuilder,
    private dialogService: DialogService
    ) { }

  ngOnInit() {
    this.linkForm = this.fb.group({
      textDisplay: ['', Validators.required],
      link: [ 0, Validators.required],
      linkBox: ['', [Validators.required]],
    });

    this.isLink = this.linkForm.get('link').value === 0 ? 'text' : 'email';
    
  }

  linkSubmit() {

    const displayName = this.linkForm.get('textDisplay').value;
    const link = this.linkForm.get('linkBox').value;
    const isLink = this.linkForm.get('link').value === 0 ? "" : "mailto:";
    const displayValue = displayName ? displayName : link;
    this.submitedLink = '<a href="'+ isLink + link +'">'+ displayValue +'</a>';

    this.dialogService.saveLink(this.submitedLink);

    this.dialogRef.close({data: this.submitedLink});
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
