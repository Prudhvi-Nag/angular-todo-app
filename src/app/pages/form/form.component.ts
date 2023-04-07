import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  form = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private formBuilder: FormBuilder) { 
    
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      return
    }
    else {
      console.log('Please fill out all required fields.');
    }
  }
}
