import { FormGroup } from '@angular/forms';

export class User {
  id: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';
  constructor(form: FormGroup) {
    this.id = form.value.id;
    this.name = form.value.name;
    this.email = form.value.email;
    this.password = form.value.password;
    this.password_confirmation = form.value.passwordRepeated;
  }
}
