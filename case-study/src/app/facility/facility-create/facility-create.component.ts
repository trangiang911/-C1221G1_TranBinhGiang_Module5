import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Facility} from "../../models/facility";
import {FacilityService} from "../../services/facility.service";
import {facilityType} from "../../data/facilityType";
import {rentType} from "../../data/rentType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FacilityType} from "../../models/facilityType";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css'],
})
export class FacilityCreateComponent implements OnInit {
  public poolSquare: boolean;
  public numberFloor: boolean;
  public facilitys: Array<Facility> = this.facilityService.getAllFacility();
  public facilityType = facilityType;
  public rentType = rentType;
  createFacility: FormGroup;

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createFacility = new FormGroup (
      {
        id: new FormControl(this.facilitys[this.facilitys.length -1].id +1,[Validators.required]),
        facilityType: new FormControl(this.facilityType[0]),
        name: new FormControl('',),
        code: new FormControl('',),
        floorSquare: new FormControl('',),
        rentalFee: new FormControl('',),
        image: new FormControl('',),
        maximumPeople: new FormControl('',),
        rentType: new FormControl(this.rentType[0],),
        roomStandard: new FormControl('',),
        description: new FormControl('',),
        numberFloor: new FormControl('',),
        poolSquare: new FormControl('',),
        freeServiceInclude: new FormControl(''),
      })
  }

  showFacility(value: FacilityType) {
    console.log(value)
    switch (value.id) {
      case 1:
        this.poolSquare = true;
        this.numberFloor = true;
        break;
      case 2:
        this.poolSquare = false;
        this.numberFloor = true;
        break;
      case 3:
        this.numberFloor = false;
        this.poolSquare = false;
    }
  }

  onSubmit() {
    if (this.createFacility.valid){
      console.log('hahahahah')
      this.facilityService.createFacility(this.createFacility.value),
        this.router.navigate(['/facility-list']);
    }
  }
}
