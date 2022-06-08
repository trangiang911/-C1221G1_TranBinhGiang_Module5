import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public result:string="";
  constructor() { }

  ngOnInit(): void {
  }

  so(value: string) {
   this.result+=value;
  }

  bang() {
    if(this.result.match(/[+/\-*]{2,}/g)){
      this.result=this.result.replace(/(\+){2,}/g,'+');
      this.result=this.result.replace(/(\-){2,}/g,'-');
      this.result=this.result.replace(/(\*){2,}/g,'*');
      this.result=this.result.replace(/(\/){2,}/g,'/');
    }
    for (let i:number=0;i<this.result.length;i++){
      if(this.result[i]=="/"){
        for(let j:number=i;i<this.result.length;i++){
          if(this.result[j]){
            this.result="Ko tính đc đâu ba";
          }
        }
      }
    }
    this.result=eval(this.result);

  }

  removeAll() {
    this.result="";
  }

  remove() {
    this.result=this.result.substring(0,this.result.length-1)
  }
}
