import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anular multiple step form';

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      name: "",
      description: ""
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: "",
      stock: ""
    });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
  }
}
