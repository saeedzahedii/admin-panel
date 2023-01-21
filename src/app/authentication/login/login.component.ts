import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authServices } from '../auth-services.service';
import { loginModel } from '../loginmodel.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form !: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: authServices) {
    this.form = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let loginInfo: loginModel = {
      username: this.form.controls['UserName'].value,
      password: this.form.controls['Password'].value
    }

    this.service.loginService(loginInfo).subscribe((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userinfo', JSON.stringify(data.user));
    })
  }

}
