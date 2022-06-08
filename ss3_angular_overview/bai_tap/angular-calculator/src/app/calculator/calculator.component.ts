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

  add() {
    // const num1 = this.num1.nativeElement.value;
    // const num2 = this.num2.nativeElement.value;
    // this.result = parseInt(num1) + parseInt(num2);

    this.result = this.number1 + this.number2;
  }

  sub() {
    // const num1 = this.num1.nativeElement.value;
    // const num2 = this.num2.nativeElement.value;
    // this.result = parseInt(num1) - parseInt(num2);
    this.result = this.number1 - this.number2;

  }

  multiply() {
    // const num1 = this.num1.nativeElement.value;
    // const num2 = this.num2.nativeElement.value;
    // this.result = parseInt(num1) * parseInt(num2);
    this.result = this.number1 * this.number2;

  }

  divide() {
    // const num1 = this.num1.nativeElement.value;
    // const num2 = this.num2.nativeElement.value;
    // this.result = parseInt(num1) / parseInt(num2);
    this.result = this.number1 / this.number2;

  }
}
