import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(

    private formBuilder: FormBuilder,

    private loginService: LoginService

  ) {}



  ngOnInit(): void {}



  formData = this.formBuilder.group({

    username: ['', Validators.required],

    password: ['', Validators.required],

  });



  onSubmit() {

    console.log(this.formData.value);

    this.loginService.generateToken(this.formData.value).subscribe(

      (response: any) => {

        console.log('token');

        console.log(response);

        this.loginService.loginUser(response.token);

        window.location.href = '/dashboard';

      },

      (error) => {

        console.log(error);

      }

    );

  }


}


