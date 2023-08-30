import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { CreateAccountService } from 'src/app/services/createAccount/create-account.service';

@Component({
  selector: 'app-login-step-one',
  templateUrl: './login-step-one.component.html',
  styleUrls: ['./login-step-one.component.css'],
})
export class LoginStepOneComponent {
  constructor(private createAccountService: CreateAccountService) {}
  formMsg = '';
  registryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordRepeated: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const passwordRepeated = group.get('passwordRepeated')?.value;

    if (password === passwordRepeated) {
      return (this.formMsg = '');
    } else {
      return (this.formMsg = 'verify your password');
    }
  }
  onSubmit() {
    this.passwordsMatchValidator(this.registryForm);
    if (this.passwordsMatchValidator(this.registryForm) == '') {
      alert('hey');
      //send an object into the registry api
      let user = new User(this.registryForm);
      this.createAccountService.createAccount(user).subscribe(
        (res) => {
          console.log('=========> ', res);
        },
        (err) => {
          console.log('err : ', err);
        }
      );
    }
  }
}
