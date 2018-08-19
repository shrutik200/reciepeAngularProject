import { Component, OnInit, Input } from '@angular/core';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  formFlag= false;
  selectedItem: any;

  constructor( private service : ReceipeService) { }

  @Input() receipeArray : any;
  receipeData : any; 
  ngOnInit() {
    this.receipeData = this.receipeArray;
  }
  changeData(item){debugger
    this.formFlag = !this.formFlag;
    this.selectedItem = item;
  }
  updateFormValue(data){debugger
    // this.showFormFlag = !this.showFormFlag;
     this.service.updateReceipe(data).subscribe(
       (data)=>{
         debugger
         console.log(data);
       }
     )
   }
}
