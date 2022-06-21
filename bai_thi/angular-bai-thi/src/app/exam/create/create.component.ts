import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {BenXe} from '../../model/ben-xe';
import {LoaiXe} from '../../model/loai-xe';
import {BenXeService} from '../../service/ben-xe.service';
import {LoaiXeService} from '../../service/loai-xe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public benXes: Array<BenXe> = [];
  public loaiXes: Array<LoaiXe> = [];
  public submited = false;
  createBenXe = new FormGroup({
      idBenXe: new FormControl(),
      soXe: new FormControl('', [Validators.required]),
      loaiXe: new FormControl('', [Validators.required]),
      tenNhaXe: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      sdt: new FormControl('', [Validators.required, Validators.pattern('^((090)|(093)|(097))\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gioDi: new FormControl('', [Validators.required, this.validateTime]),
      gioDen: new FormControl('', [Validators.required])
    }
  );

  constructor(private benXeService: BenXeService,
              private loaiXeService: LoaiXeService,
              private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.benXeService.getListAndSearch('%', '').subscribe(benxe => this.benXes = benxe.content);
    console.log(this.benXes);
    this.loaiXeService.getAllLoaiXe().subscribe(loaixe => this.loaiXes = loaixe);
    console.log(this.loaiXes);
  }
  compareByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }
  validateTime(gioDi: AbstractControl) {
    const x =  gioDi.value;
    const y = x.split(':');
    const z = Number(y[0]);
    console.log(z);
    if ( z < 5 || z > 23 ) {
      return {validTime: true};
    } else {
      return null;
    }
  }

  onSubmit() {
    const benXe = this.createBenXe.value;
    this.submited = true;
    if (this.createBenXe.valid) {
      this.benXeService.createBenXe(benXe).subscribe(() => this.router.navigate(['/list']));
    }
  }
}
