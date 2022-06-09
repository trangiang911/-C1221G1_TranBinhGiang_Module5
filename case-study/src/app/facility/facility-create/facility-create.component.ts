import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  public poolSquare: boolean;
  public numberFloor: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  showFacility(value: any) {
    switch (value) {
      case '1':
        this.poolSquare = true;
        this.numberFloor = true;
        break;
      case '2':
        this.poolSquare = false;
        this.numberFloor = true;
        break;
      case '3':
        this.numberFloor = false;
        this.poolSquare = false;
    }
  }
}
