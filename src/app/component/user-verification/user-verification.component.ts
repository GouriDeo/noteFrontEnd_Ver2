import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../service/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.css']
})
export class UserVerificationComponent implements OnInit {
  verifyForm: FormGroup;

  constructor(private fb:FormBuilder, private service:HttpRequestService, private router:Router) { }

  ngOnInit(): void {
    this.verifyForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  get email(){
    return this.verifyForm.get('email');
  }

  verify(){
    let userDetail = {
      token: document.URL.split('verify/')[1],
      email: this.verifyForm.value.email
    }

    this.service.verify(
      userDetail
    ).subscribe(res => {
      this.router.navigate(['login']);
      console.log(res);
    }, err => {
      console.log(err);
      alert(err.error.msg);
    });
  }

}
