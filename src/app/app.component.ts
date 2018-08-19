import { Component } from '@angular/core';
import { ReceipeService } from './receipe.service';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receipeArray: any;
  id_number: any;

  constructor(
   private service : ReceipeService
  ) {
  }
  words2 = [{value: ''}];
  showFormFlag = false;
  ngOnInit(){
    debugger
    this.service.getAllTodos().subscribe(
      (data) => {
        console.log(data);
        debugger
        this.receipeArray = data;
        this.id_number = this.receipeArray.length;
      }
    );
  }
receipeForm(){
this.showFormFlag = !this.showFormFlag;

}
changeFlagStatus(data1){
  this.showFormFlag = !this.showFormFlag;
  debugger;
  this.service.UpdateList(data1).subscribe(
    (data) =>{
      debugger;
      this.receipeArray.push(data);
      console.log(data);
    }
  )
}

}




