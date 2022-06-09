import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @ViewChild('num1') num1: ElementRef;
  @ViewChild('num2') num2: ElementRef;

  public number1: number;
  public number2: number;
  public result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(value: any) {
    switch (value) {
      case '+':
        this.result = Number(this.num1.nativeElement.value) + Number(this.num2.nativeElement.value);
        // this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case 'x':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
      default:
        break;
    }
  }
}
