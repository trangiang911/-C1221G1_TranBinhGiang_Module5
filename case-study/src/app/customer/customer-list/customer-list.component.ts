import {Component, OnInit} from '@angular/core';
import {Customer} from "../../models/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers: Array<Customer> = [];
  contentDelete: string;
  idDel: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    console.log(this.customerService.getAllCustomer())
    this.customers = this.customerService.getAllCustomer();
  }

  delete(name: string, id: number) {
    this.contentDelete = name;
    this.idDel = id;
  }


  remove(idDel: number) {
    this.customerService.removeByid(idDel);
    this.ngOnInit();
  }
}
