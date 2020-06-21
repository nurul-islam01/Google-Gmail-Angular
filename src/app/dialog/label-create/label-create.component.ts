import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-label-create',
  templateUrl: './label-create.component.html',
  styleUrls: ['./label-create.component.css']
})
export class LabelCreateComponent implements OnInit {

  labelFrom: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LabelCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder) {}

  ngOnInit() {
    this.labelFrom = this.fb.group({
      name: ['', Validators.required],
      labelCheck: false,
      selectedLabel: ''
    })
  }

  checkbox() {
    const isCheck = this.labelFrom.get('labelCheck').value;
    console.log(isCheck);
    
    if(isCheck) {
      this.labelFrom.get('selectedLabel').reset();      
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
