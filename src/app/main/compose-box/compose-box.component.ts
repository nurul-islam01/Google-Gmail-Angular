import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.css']
})
export class ComposeBoxComponent implements OnInit {

  composeForm: FormGroup;
  recipentVisibility = true;

  images = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.composeForm = this.fb.group({
      to: ['', Validators.required],
      subject: [''],
      messageBody: ['', Validators.required],
      file: [''],
      image: ['']
    })
  }

  drop(event: CdkDragDrop<[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }


  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                  console.log(event.target);

                   this.images.push(event.target.result); 
   
                   this.composeForm.patchValue({
                      fileSource: this.images
                   });
                }
  
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  recipentClick() {
     this.recipentVisibility = false;
  }

  toFocusOut() {
    this.recipentVisibility = this.composeForm.get('to').value ? false : true;
  }

}
