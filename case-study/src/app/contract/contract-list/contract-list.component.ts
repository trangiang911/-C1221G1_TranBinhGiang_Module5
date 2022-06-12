import { Component, OnInit } from '@angular/core';
import {contracts} from '../../data/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  public contracts = contracts;
  constructor() { }

  ngOnInit(): void {
  }

}
