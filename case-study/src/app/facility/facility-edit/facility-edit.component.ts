import { Component, OnInit } from '@angular/core';
import {Facility} from "../../models/facility";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FacilityService} from "../../services/facility.service";
import {facilityType} from "../../data/facilityType";
import {rentType} from "../../data/rentType";
import {FacilityType} from "../../models/facilityType";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  public poolSquare: boolean;
  public numberFloor: boolean;
public faclititys:Array<Facility> = [];
public facility = {} as Facility;
public facilityType = facilityType;
public rentType = rentType;
  editFacility = new FormGroup({
    id: new FormControl(''),
    facilityType: new FormControl(),
    name: new FormControl(''),
    code: new FormControl(''),
    floorSquare: new FormControl(''),
    rentalFee: new FormControl(''),
    image: new FormControl(''),
    maximumPeople: new FormControl(''),
    rentType: new FormControl(''),
    roomStandard: new FormControl(''),
    description: new FormControl(''),
    numberFloor: new FormControl(''),
    poolSquare: new FormControl(''),
    freeServiceInclude: new FormControl(''),
  });
  constructor(private route: ActivatedRoute,
              private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
    const allParams = this.route.snapshot.paramMap;
    const param = allParams.get('id');
    console.log(param);
    this.facility = this.facilityService.findFacilityById((Number)(param));
    console.log(this.facility);
    this.editFacility.setValue(this.facility);
    this.faclititys = this.facilityService.getAllFacility();
  }

  onSubmit() {

        this.facilityService.update(this.editFacility.value)
        this.router.navigate(['/facility-list'])
        this.ngOnInit()

  }
  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  // showFacility(value: FacilityType) {
  //   console.log(value)
  //   switch (value.id) {
  //     case value.id = 1:
  //       this.poolSquare = true;
  //       this.numberFloor = true;
  //       break;
  //     case value.id = 2:
  //       this.poolSquare = false;
  //       this.numberFloor = true;
  //       break;
  //     case value.id = 3:
  //       this.numberFloor = false;
  //       this.poolSquare = false;
  //   }
  // }
}
