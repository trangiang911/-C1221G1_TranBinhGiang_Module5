import { Component, OnInit } from '@angular/core';
import {Contract} from "../../models/contract";
import {ContractService} from "../contract.service";
import {Facility} from "../../models/facility";
import {FacilityService} from "../../facility/facility.service";
import {Customer} from "../../models/customer";
import {CustomerService} from "../../customer/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  public contracts: Array<Contract> = this.contractService.getAllContracts();
  public facilitys: Array<Facility> = this.facilityService.getAllFacility();
  public customers: Customer[];
  createContract= new FormGroup({
    id: new FormControl(this.contracts[this.contracts.length - 1].id+1),
    startDate: new FormControl('t',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    deposit: new FormControl('',[Validators.required]),
    customer: new FormControl('',[Validators.required]),
    facility: new FormControl('',[Validators.required]),
    total: new FormControl('',[Validators.required])
  });
  constructor(private contractService: ContractService,
              private facilityService: FacilityService,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
  }
  getAllCustomer(){
    this.customerService.getAllCustomer().subscribe(customers =>{
this.customers = customers;
    });
  }
  onSubmit() {
    console.log(this.createContract.value);
    if(this.createContract.valid){
      this.contractService.createContract( this.createContract.value);
      this.router.navigate(['/contract-list']);
    }
  }
}
