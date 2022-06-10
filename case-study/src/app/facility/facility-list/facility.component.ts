import {Component, OnInit} from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  private scriptUrls = [
    '../../assets/js/jquery-3.2.1.min.js',
    '../../assets/js/popper.js',
    '../../assets/js/bootstrap.min.js',
    '../../assets/vendors/owl-carousel/owl.carousel.min.js',
    '../../assets/js/jquery.ajaxchimp.min.js',
    '../../assets/js/mail-script.js',
    '../../assets/vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.js',
    '../../assets/vendors/nice-select/js/jquery.nice-select.js',
    '../../assets/js/mail-script.js',
    '../../assets/js/stellar.js',
    '../../assets/vendors/lightbox/simpleLightbox.min.js',
    '../../assets/js/custom.js',
    '../../assets/js/default-assets/card.js',
    '../../assets/js/three-dot.js'
  ];

  constructor() {
  }

  ngOnInit(): void {
    // this.removeScript();
    this.loadScript();
  }

  public loadScript() {
    for (const scriptUrl of this.scriptUrls) {
      const body = document.body as HTMLDivElement;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = scriptUrl;
      // script.type = 'module';
      body.appendChild(script);
    }
  }

  public removeScript() {
    const script = document.scripts;
    console.log(script.length);
    let i = script.length;
    while (i--) {
      console.log(script.item(i));
      script.item(i).remove();
    }
  }
}
