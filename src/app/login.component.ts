import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.scss' ]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
      // TODO: if already login, redirect to home page
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (i === null) {
        continue;
      }
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();

      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
