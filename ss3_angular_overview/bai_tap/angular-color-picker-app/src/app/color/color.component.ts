import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  public color: string;
  constructor() { }

  ngOnInit(): void {
  }
  getColor() {
    let colorVal = (document.getElementById('head') as HTMLInputElement).value;
    this.color = colorVal;
  }
}
