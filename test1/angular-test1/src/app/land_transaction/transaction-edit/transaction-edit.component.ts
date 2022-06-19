import { Component, OnInit } from '@angular/core';
import {GiaoDich} from "../../model/giao-dich";
import {FacilityType} from "../../model/facility-type";
import {KhachHang} from "../../model/khach-hang";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../service/transaction.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilityTypeService} from "../../service/facility-type.service";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  public submited = false;
  public transactions: GiaoDich[] = [];
  public facilityType: FacilityType[] = [];
  public transaction: GiaoDich = {} as GiaoDich;
  public customers: KhachHang[] = [];
  public check = true;
  public id:number;
  editTrans = new FormGroup({
    id: new FormControl(),
    code: new FormControl('',[Validators.required]),
    codeCustomer: new FormControl(),
    facilityType: new FormControl(),
    startDate: new FormControl(),
    price: new FormControl(),
    area: new FormControl(),
  });
  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute,
              private router: Router,
              private facilityTypeService: FacilityTypeService,
              private customerService: CustomerService, ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => this.id = +paramMap.get('id') )
    console.log(this.id)
    this.transactionService.getAllTrans().subscribe(trans => this.transactions = trans)
    this.facilityTypeService.getAllFacilityType().subscribe(type => this.facilityType = type);
    this.customerService.getAllCustomer().subscribe(cus => this.customers = cus);
    this.getTransaction(this.id);
  }

  onSubmit(id: number) {
    const transaction = this.editTrans.value;
    if(this.editTrans.valid){
      this.transactionService.updateTransaction(transaction,id).subscribe(() => {
        alert('Thành công');
        this.router.navigate(['transaction-list'])
      })

    }
  }
  getTransaction(id: number){
    return this.transactionService.findTransactionById(id).subscribe(tran => this.editTrans.setValue(tran))
  }
  onChange(value: any) {

  }

  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }
}
