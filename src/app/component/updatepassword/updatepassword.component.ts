import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../service/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  updatepasswordForm: FormGroup;

  constructor(private fb:FormBuilder, private service:HttpRequestService,private router:Router) { }

  ngOnInit(): void {
    this.updatepasswordForm = this.fb.group({
      password: ['', Validators.required]
    })
  }

  get password(){
    return this.updatepasswordForm.get('password');
  }

  updatepassword(){
    let userDetail = {
      token: document.URL.split('updatepassword/')[1],
      password: this.updatepasswordForm.value.password
    }
    this.service.updatepassword(
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
