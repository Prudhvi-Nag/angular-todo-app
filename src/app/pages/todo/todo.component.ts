import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServService } from 'src/app/services/todo-serv.service';
import * as moment from 'moment';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  // myDate: Date,
  todoForm = this.formBuilder.group({
    title: ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
    completed: ['', Validators.required],
    target: ["", Validators.compose([Validators.required])],
    createdAt: moment().format('DD-MM-YYYY HH:mm:SS'),
    updatedAt: moment().format('DD-MM-YYYY HH:mm:SS'),
  })

  id: any = "";
  constructor(private formBuilder: FormBuilder, private router: Router, private ar: ActivatedRoute, private srv: TodoServService) {

  }
  ngOnInit(): void {
    this.ar.params.subscribe((params: any) => {
      console.log(params)
      if (params.id) {
        this.id = params.id;
        this.getProduct()
      }
    })
  }
  
  getProduct() {
    this.srv.get(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.todoForm.patchValue(res)
      }
    })
  }

  submit() {
    if (this.todoForm.invalid) {
      return
    }
    console.log(this.todoForm.value);

    let newMomentValues = this.todoForm.value
    const newTargetValue = newMomentValues.target;

    const MomentTarget = moment(newTargetValue).format("DD-MM-YYYY")
    const MomentPayload = { ...this.todoForm.value, target: MomentTarget }
    console.log(MomentPayload)


    if (this.id) {
      this.srv.update(this.todoForm.value, this.id).subscribe({
        next: () => {
          this.router.navigateByUrl("/")
        },
        error: () => {

        },
        complete: () => {

        }
      })
    }

    this.srv.create(MomentPayload).subscribe({
      next: () => {
        this.router.navigateByUrl("/")

      },
      error: () => {

      },
      complete: () => {

      }
    })
  }
}
