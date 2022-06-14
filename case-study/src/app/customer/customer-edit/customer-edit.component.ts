import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {customerType} from "../../data/customerType";
import {Customer} from "../../models/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  public customers: Array<Customer> = [] ;
  public customer = {} as Customer;
  public customerType = customerType;
  editCus = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required]),
    code: new FormControl('',[Validators.required,Validators.pattern(/^(KH-)\d{4}$/)]),
    birthday: new FormControl('',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    idCard: new FormControl('',[Validators.required,Validators.pattern(/^\d{9,12}$/)]),
    phone: new FormControl('',[Validators.required]),
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
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
    const allParams = this.route.snapshot.paramMap;
    const param = allParams.get('id');
    console.log(param);
    this.customer = this.customerService.findCustomerById((Number)(param));
    console.log(this.customer);
    this.editCus.setValue(this.customer);
    this.customers = this.customerService.getAllCustomer();
  }

  onSubmit() {
    console.log(this.editCus.value);
    if(this.editCus.valid){
      this.customerService.update(this.editCus.value)
      // this.router.navigate(['/customer-list']);
      this.ngOnInit()
    }
  }
  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }
}
