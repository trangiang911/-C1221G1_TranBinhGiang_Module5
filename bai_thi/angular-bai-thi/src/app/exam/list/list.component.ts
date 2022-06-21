import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BenXe} from '../../model/ben-xe';
import {LoaiXe} from '../../model/loai-xe';
import {BenXeService} from '../../service/ben-xe.service';
import {LoaiXeService} from '../../service/loai-xe.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('keySearch1') keySearch1: ElementRef;
  @ViewChild('keySearch3') keySearch3: ElementRef;
  p: string | number;
  public benXes: Array<BenXe> = [];
  public loaiXes: Array<LoaiXe> = [];
  public soXe: string;
  public id: number;

  constructor(private benXeService: BenXeService,
              private loaiXeService: LoaiXeService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.benXeService.getListAndSearch('%', '').subscribe(benxe => this.benXes = benxe.content);
    console.log(this.benXes);
    this.loaiXeService.getAllLoaiXe().subscribe(loaixe => this.loaiXes = loaixe);
    console.log(this.loaiXes);
  }

  delete(soXe: string, id: number) {
    this.soXe = soXe;
    this.id = id;
  }

  remove(id: number) {
    this.benXeService.deleteXe(id).subscribe(() => this.ngOnInit());
  }

  search() {
    console.log(this.keySearch1.nativeElement.value);
    console.log(this.keySearch3.nativeElement.value);

    // tslint:disable-next-line:max-line-length
    this.benXeService.getListAndSearch(this.keySearch3.nativeElement.value, this.keySearch1.nativeElement.value).subscribe(benxe => {
      // @ts-ignore
        this.benXes = benxe.content;
      }, () => {}
      );
    console.log(this.benXes);
  }

}
