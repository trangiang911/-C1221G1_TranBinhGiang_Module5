import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {BenXeService} from '../../service/ben-xe.service';
import {LoaiXeService} from '../../service/loai-xe.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BenXe} from '../../model/ben-xe';
import {LoaiXe} from '../../model/loai-xe';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public submited = false;
  public benXes: Array<BenXe> = [];
  public loaiXes: Array<LoaiXe> = [];
  public id: number;
  editBenXe = new FormGroup({
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
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => this.id = +paramMap.get('id'));
    this.benXeService.getAllBenXe().subscribe(benxe => this.benXes = benxe);
    console.log(this.benXes);
    this.loaiXeService.getAllLoaiXe().subscribe(loaixe => this.loaiXes = loaixe);
    console.log(this.loaiXes);
    this.getBenXeByid(this.id);
    console.log(this.editBenXe.value);
  }

  onSubmit(id: any) {
    this.submited = true;
    const benXe = this.editBenXe.value;
    if (this.editBenXe.valid) {
      this.benXeService.updateBenXe(benXe, id).subscribe(() => {
        alert('Thành công rồi Đại Vương');
        // this.router.navigate(['list']);
        console.log(this.editBenXe.value);
      });
    } else {
      alert('Không Ổn rồi đại vương');
    }
  }
  getBenXeByid(id: number) {
    return this.benXeService.findBenById(id).subscribe( benxe => this.editBenXe.patchValue(benxe));
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
}
