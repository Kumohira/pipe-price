import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MyPipe implements PipeTransform {

  transform(val: string): string {
    if(val){
      let val2 = val.split(',');
      let val3='';
      for(let vl of val2){
        val3 += vl + ' ';
      }
      val3 = val3.substring(0,val3.length-1);
      return val3;
    }
    else{
      return null;
    }
    
  }
}
