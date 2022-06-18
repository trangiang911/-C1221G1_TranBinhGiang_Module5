import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TransactionService} from "../../service/transaction.service";
import {GiaoDich} from "../../model/giao-dich";
import {FacilityType} from "../../model/facility-type";
import {FacilityTypeService} from "../../service/facility-type.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  @ViewChild('keySearch1') keySearch1: ElementRef;
  @ViewChild('keySearch2') keySearch2: ElementRef;
  public transactions: Array<GiaoDich> = [];
  public facilityType:Array<FacilityType> = [];
  p: any;
  constructor(private transactionService: TransactionService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    this.transactionService.search(
      '',
      '').subscribe(transactions => this.transactions = transactions)
    this.facilityTypeService.getAllFacilityType().subscribe(type => this.facilityType = type);
  }

  search() {
    this.transactionService.search(
      this.keySearch1.nativeElement.value,
      this.keySearch2.nativeElement.value).subscribe(transactions => this.transactions = transactions)
  }
}
