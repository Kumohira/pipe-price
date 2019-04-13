import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  myNum: number = 9999999.699; // 1234.1111

  getType(){
    return typeof(this.myNum);
  }

  reformate(str:string){
    /*
      let splitedRight = str.split('.')[1];
      let right='';
      if(splitedRight){
        right = splitedRight.slice(0,2);
      }
    */
    let splitedLeft = str.split(' ');
    let left='';
    for(let sl of splitedLeft){
      left += sl;
    }

    this.myNum = parseFloat(left);
  }

}
