import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Facility} from "../models/facility";
import {Contract} from "../models/contract";
import {Customer} from "../models/customer";
import {ModalService} from "../services/modalService";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [ModalService]
})
export class ModalComponent implements OnInit {
  // @ViewChild('contentDel') contentDel: ElementRef;
  // public contentDelete: string;
  @Input() contentDelete: string;
  @Input() arr: Array<Customer | Facility | Contract>;
  @Input() id: number;
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  remove(array: Array<Customer | Facility | Contract>, idDel: number){
    console.log(array)
    console.log(idDel)
    this.modalService.removeObj(array,idDel)
    console.log(array)
  }
}
