import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../service/transaction.service";
import {FacilityTypeService} from "../../service/facility-type.service";
import {GiaoDich} from "../../model/giao-dich";
import {FacilityType} from "../../model/facility-type";
import {KhachHang} from "../../model/khach-hang";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import validate = WebAssembly.validate;



@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  public transactions: GiaoDich[] = [];
  public facilityType: FacilityType[] = [];
  public customers: KhachHang[] = [];
  createTrans = new FormGroup({
    id: new FormControl(),
    code: new FormControl('',[Validators.required]),
    codeCustomer: new FormControl(),
    facilityType: new FormControl(),
    startDate: new FormControl(),
    price: new FormControl(),
    area: new FormControl(),
  });

  constructor(private transactionService: TransactionService,
              private facilityTypeService: FacilityTypeService,
              private customerService: CustomerService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.facilityTypeService.getAllFacilityType().subscribe(type => this.facilityType = type);
    this.customerService.getAllCustomer().subscribe(cus => this.customers = cus);
    this.createTrans.get('code').value
  }

  onSubmit() {
    const trans = this.createTrans.value;
    if (this.createTrans.valid) {
      this.transactionService.save(trans).subscribe(() => this.route.navigate([`/transaction-list`]))
    } else {
      alert('ko ổn rồi đại vương')
    }
  }
  validatorDate(code: AbstractControl) {
    const codeVal = code.value;
    let trans: GiaoDich[] = [];
    this.transactionService.search('','').subscribe(tran => trans = tran)
    if(trans.find(x => x.code === codeVal)){
      return {check: true}
    }else {
      return null;
    }
  }
}
