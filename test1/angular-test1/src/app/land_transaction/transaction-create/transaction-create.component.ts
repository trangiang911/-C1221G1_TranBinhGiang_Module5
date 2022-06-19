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
  public submited = false;
  public transactions: GiaoDich[] = [];
  public facilityType: FacilityType[] = [];
  public customers: KhachHang[] = [];
  public check = true;
  createTrans = new FormGroup({
    id: new FormControl(),
    code: new FormControl('',[Validators.required,Validators.pattern(/^(MGD-)\d{4}$/)]),
    codeCustomer: new FormControl(),
    facilityType: new FormControl(),
    startDate: new FormControl('',[Validators.required,this.validateStartDate]),
    price: new FormControl(),
    area: new FormControl(),
  });

  constructor(private transactionService: TransactionService,
              private facilityTypeService: FacilityTypeService,
              private customerService: CustomerService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.transactionService.getAllTrans().subscribe(trans => this.transactions = trans)
    this.facilityTypeService.getAllFacilityType().subscribe(type => this.facilityType = type);
    this.customerService.getAllCustomer().subscribe(cus => this.customers = cus);
  }

  onSubmit() {
    this.submited = true
    const trans = this.createTrans.value;
    if (this.createTrans.valid && this.check) {
      this.transactionService.save(trans).subscribe(() => this.route.navigate([`/transaction-list`]))
    } else {
      alert('ko ổn rồi đại vương')
    }
  }

  onChange(value: string) {
    console.log(this.transactions)
    console.log(value);
    if(this.transactions.find(x => x.code === value)){
      console.log('trùng rồi');
      this.check = false;
    }else {
      this.check = true;
    }
  }
  validateStartDate(startDate: AbstractControl){
    const x =new Date(startDate.value);
    const y = new Date(Date.now());
    if(x < y){
      return {validDate: true}
    }else {
      return null;
    }
  }

}
