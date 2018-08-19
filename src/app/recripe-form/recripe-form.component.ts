import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ReceipeData } from '../receipe-data';

@Component({
  selector: 'app-recripe-form',
  templateUrl: './recripe-form.component.html',
  styleUrls: ['./recripe-form.component.css'],
  providers : [ReceipeData]
})
export class RecripeFormComponent implements OnInit {

  constructor(private ProductModel : ReceipeData) { }
  myform: FormGroup;
  receipeName: FormControl;
  imageUrl: FormControl;
  description: FormControl;
  @Input() id_number : any;
  @Input() selectedItem : any;
  @Output() showForm: EventEmitter<any> = new EventEmitter();
  @Output() showEditedForm: EventEmitter<any> = new EventEmitter();

  createFormControls() {
    this.receipeName = new FormControl("", Validators.required);
    this.imageUrl = new FormControl("",);
    this.description = new FormControl("", Validators.required);
  }

  createForm() {
  /*   if (this.selectedItem){
      this.myform = new FormGroup({
        receipeName: this.selectedItem.receipeName,
        imageUrl: this.selectedItem.imageUrl,
        description: this.selectedItem.description
    });
    }
    else{ */
      this.myform = new FormGroup({
        receipeName: this.receipeName,
        imageUrl: this.imageUrl,
        description: this.description
    });
   // }
  }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
onSubmit() {debugger
    if (this.myform.valid) {
      this.ProductModel.receipeName = this.myform.value.receipeName;
      this.ProductModel.imageUrl= this.myform.value.imageUrl;
      this.ProductModel.description= this.myform.value.description;
      if(this.selectedItem){
        this.ProductModel.id_number = this.selectedItem.id_number;
        this.myform.reset();
      this.showEditedForm.emit(this.ProductModel);
      }
      else{
        this.id_number++;
        this.ProductModel.id_number = this.id_number;     
        this.myform.reset();
      this.showForm.emit(this.ProductModel);
      }
    }
}
}
