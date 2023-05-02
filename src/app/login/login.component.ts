import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  password: string;
  show: boolean;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    
  }

  createForm(){
    this.loginForm = this.builder.group({
      "email":["",[Validators.required,Validators.email]],
      "password":["",Validators.required]

    })
  }

  loginData(data:any){
    console.log(`form data ${JSON.stringify(data)}`);
  }

  togglePassword(){
      if (this.password === 'password') {
        this.password = 'text';
        this.show = true;
      } else {
        this.password = 'password';
        this.show = false;
      }
    }
  
}
