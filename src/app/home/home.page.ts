import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {

this.formularioLogin = this.fb.group({
  'nombre': new FormControl("", Validators.required),
  'password': new FormControl("", Validators.required)
})

  }

  
}
