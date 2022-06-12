import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // @ViewChild('contentDel') contentDel: ElementRef;
  // public contentDelete: string;
  @Input() contentDelete: string;
  constructor() { }

  ngOnInit(): void {
  }
  // delete() {
  //   this.contentDelete = String(this.contentDel.nativeElement.innerText);
  //   console.log(this.contentDelete);
  // }
}
