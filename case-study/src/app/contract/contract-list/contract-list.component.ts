import { Component, OnInit } from '@angular/core';
import {contracts} from '../../data/contract';
import {ContractService} from "../contract.service";
import {Contract} from "../../models/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  public contracts:Array<Contract> = [];
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contracts = this.contractService.getAllContracts()
  }

}
