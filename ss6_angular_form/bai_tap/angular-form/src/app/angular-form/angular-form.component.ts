import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
  public createForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPsw: new FormControl('', [Validators.required]),
    country: new FormControl('vietnam', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern( /^\+84\d{9,10}$/)])
  }, [this.validatePassWord]);
  constructor() {}

  ngOnInit(): void {
  }

  onSubmit() {
  }

  validatePassWord(createForm: AbstractControl) {
    console.log(createForm.value);
    const pws = createForm.get('psw').value;
    const confirmPws = createForm.get('confirmPsw').value;
    if (confirmPws !== pws) {
      return {pwsValid: true};
    } else {
      return null;
    }
  }
}
