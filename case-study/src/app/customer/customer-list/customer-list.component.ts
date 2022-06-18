import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../models/customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('keySearch1') keySearch1:ElementRef;
  @ViewChild('keySearch2') keySearch2:ElementRef;
  @ViewChild('keySearch3') keySearch3:ElementRef;

  public customers: Array<Customer> = [];
  contentDelete: string;
  id: number;
  p: string | number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    console.log(this.customerService.getAllCustomer())
    this.customerService.getAllCustomer().subscribe(customers => {
      // @ts-ignore
      this.customers = customers.content;
    });
    // this.customerService.search("",
    //   "",
    //   "").subscribe(customers => this.customers = customers,
    //   () => {},
    //   () =>this.ngOnInit);
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

  search() {
    console.log(this.keySearch1.nativeElement.value)
    console.log(this.keySearch2.nativeElement.value)
    console.log(this.keySearch3.nativeElement.value)
    this.customerService.search(this.keySearch1.nativeElement.value,
      this.keySearch2.nativeElement.value,
      this.keySearch3.nativeElement.value).subscribe(customers => this.customers = customers,
      () => {});
  }
}
