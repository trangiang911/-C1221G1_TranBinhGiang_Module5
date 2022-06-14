import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomerService} from "../../services/customerService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {customers} from "../../data/customer";
import {customerType} from "../../data/customerType";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [CustomerService]
})
export class CustomerEditComponent implements OnInit {
  public customers = customers;
  public customer = {} as Customer;
  public customerType = customerType;
  editCus = new FormGroup({
    id: new FormControl(this.customers[this.customers.length - 1].id),
    name: new FormControl('',[Validators.required]),
    code: new FormControl('',[Validators.required,Validators.pattern(/^(KH-)\d{4}$/)]),
    birthday: new FormControl('',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    idCard: new FormControl('',[Validators.required,Validators.pattern(/^\d{9,12}$/)]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',[Validators.required]),
    gender: new FormControl(-1,[Validators.required]),
    customerType: new FormControl(this.customerType[0],[Validators.required]),
    // customerType: new FormGroup({
    //   id: new FormControl(),
    //   type: new FormControl(),
    // }),
  });
  constructor(private route: ActivatedRoute,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    const allParams = this.route.snapshot.paramMap;
    const param = allParams.get('id');
    console.log(param);
    this.customer = this.customerService.findCustomerById(customers,(Number)(param));
    console.log(this.customer);
    this.editCus.setValue(this.customer);
  }

  onSubmit() {
    console.log(this.editCus.value);
    if(this.editCus.valid){
      this.customerService.Update(customers,this.editCus.value)
      console.log(this.customer)

    }
  }
  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }
}
