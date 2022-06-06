import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  so(value: string) {
    let result=(document.getElementById('result') as HTMLInputElement).value;
    (document.getElementById('result') as HTMLInputElement).value=result+value
  }

  bang() {
    let str=(document.getElementById('result')as HTMLInputElement).value;
    let result=eval(str);
    (document.getElementById('result') as HTMLInputElement).value=result
  }
}
