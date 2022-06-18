import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../models/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {customerType} from '../../data/customerType';
import {Router} from "@angular/router";
import {CustomerListComponent} from "../customer-list/customer-list.component";
import {customers} from "../../data/customer";
import {CustomerService} from "../customer.service";
import {CustomerTypeService} from "../customer-type.service";
import {CustomerType} from "../../models/customer-type";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[];
  createCus = new FormGroup({
    customerId: new FormControl(),
    customerName: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/)]),
    code: new FormControl('',[Validators.required,Validators.pattern(/^(KH-)\d{4}$/)]),
    customerBirthday: new FormControl('',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    customerIdCard: new FormControl('',[Validators.required,Validators.pattern(/^\d{9,12}$/)]),
    customerPhone: new FormControl('',[Validators.required,Validators.pattern(/((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}/)]),
    customerEmail: new FormControl('',[Validators.required,Validators.email]),
    customerAddress: new FormControl('',[Validators.required]),
    customerGender: new FormControl(-1,[Validators.required]),
    customerType: new FormControl("",[Validators.required]),
  });

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();

  }

  getAllCustomerType(){
    this.customerTypeService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
      console.log(this.customerTypes);
    }, error => {
      console.log(error)
    });
  }
  onSubmit() {
    const customer = this.createCus.value;
    if(this.createCus.valid){
      this.customerService.createCustomer( customer).subscribe(() => {
        this.route.navigate(['/customer/list']);
      });
    }else {
      alert('Ko ổn rồi đại vương')
    }
  }
}
