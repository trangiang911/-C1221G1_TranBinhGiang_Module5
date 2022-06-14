import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../models/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {customerType} from '../../data/customerType';
import {Router} from "@angular/router";
import {CustomerListComponent} from "../customer-list/customer-list.component";
import {customers} from "../../data/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  public customers = this.customerService.getAllCustomer();
  public customerType = customerType;
  createCus = new FormGroup({
    id: new FormControl(this.customers[this.customers.length - 1].id + 1),
    name: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/)]),
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

  constructor(private customerService: CustomerService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createCus.value);
    if(this.createCus.valid){
      this.customerService.createCustomer( this.createCus.value);
      this.route.navigate(['/customer-list']);
    }
  }
}
