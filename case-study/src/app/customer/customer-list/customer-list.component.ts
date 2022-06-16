import {Component, OnInit} from '@angular/core';
import {Customer} from "../../models/customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers: Array<Customer> = [];
  contentDelete: string;
  id: number;
  p: string | number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    console.log(this.customerService.getAllCustomer())
    this.customerService.getAllCustomer().subscribe(customers => {
      this.customers = customers
    });
  }

  delete(name: string, id: number) {
    this.contentDelete = name;
    this.id = id;
  }


  remove(id: number) {
    this.customerService.removeByid(id).subscribe(() => {
      this.ngOnInit();
    });

  }
}
