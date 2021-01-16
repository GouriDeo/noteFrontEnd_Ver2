import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../service/user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm : FormGroup;
  res
  constructor(private fb:FormBuilder, private service:HttpRequestService,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login(){
    this.service.login(this.loginForm.value).subscribe(res => {
      this.res=res
      localStorage.setItem('loginToken',this.res.token)
      this.router.navigate(['dashboard'])
    })
  }

}
