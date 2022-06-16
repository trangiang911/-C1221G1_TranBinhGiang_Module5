import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {customerType} from "../../data/customerType";
import {Customer} from "../../models/customer";
import {CustomerService} from "../customer.service";
import {CustomerType} from "../../models/customer-type";
import {CustomerTypeService} from "../customer-type.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  public customers: Array<Customer> = [] ;
  public customer = {} as Customer;
  public customerType:Array<CustomerType>;
  public id:number;
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
    customerType: new FormControl([Validators.required]),
  });
  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.route.paramMap.subscribe((paramMap: ParamMap) =>{
        this.id = +paramMap.get('id');
        this.getCustomer(this.id);
    })
  }

  ngOnInit(): void {
    this.getAllCustomerType()
  }
  getAllCustomerType(){
    this.customerTypeService.getAllCustomerType().subscribe(customerType =>
    this.customerType = customerType)
  }
  getCustomer(id: number){
    return this.customerService.findCustomerById(id).subscribe(customer => {
      this.editCus.setValue(customer)
    });
  }

  onSubmit(id :number) {
    const customer = this.editCus.value;
    console.log(this.editCus.value);
    if(this.editCus.valid){
      this.customerService.update(customer, id).subscribe(() => {
        alert('thành công');
        this.router.navigate(['customer/list']);
      },e => console.log(e))
      // this.router.navigate(['/customer-list']);
      this.ngOnInit()
    }
  }
  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }
}
