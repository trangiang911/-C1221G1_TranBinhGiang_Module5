import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../models/customer';
import {customers} from '../../data/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {customerType} from '../../data/customerType';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  // public customer: Customer;
  public customer = {} as Customer;
  public customers = customers;
  public customerType = customerType;
  public default: string = 'Choice';
  createCus = new FormGroup({
    id: new FormControl(this.customers[this.customers.length - 1].id + 1),
    name: new FormControl(),
    code: new FormControl(),
    birthday: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    gender: new FormControl(-1),
    customerType: new FormControl(1),
  });
  constructor() {
    // this.customer = {code: '', id: this.customers[this.customers.length - 1].id + 1, name: ''};
  }

  ngOnInit(): void {
  }

  // createCustomer() {
  //   this.customer.id = this.customers[this.customers.length - 1].id + 1;
  //   console.log(this.customer);
  //   this.customers.push(this.customer);
  //   this.customer = {} as Customer;
  // }

  onSubmit() {
    console.log(this.createCus.value);
    this.customers.push(this.createCus.value);
  }
}
