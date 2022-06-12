import { Component, OnInit } from '@angular/core';
import {customers} from '../../data/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers = customers;
  contentDelete: string;
  constructor() { }

  ngOnInit(): void {
  }

  delete(name: string) {
    this.contentDelete = name;
  }
}
