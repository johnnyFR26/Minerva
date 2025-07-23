import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EMAIL_REGEXP } from '../../utils/email-validator';
import { MatButtonModule } from '@angular/material/button';
import { User } from '@services/user';

@Component({
  selector: 'app-sigin',
  imports: [MatInputModule, MatSelectModule, MatIconModule, FormsModule, MatButtonModule],
  templateUrl: './sigin.html',
  styleUrl: './sigin.scss'
})
export class Sigin {

  public email = signal('')
  public password = signal('')
  public confirmPassword = signal('')
  public role = signal('')
  public name = signal('')
  public showPassword = true
  private userService = inject(User)

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  public isFormValid() {
    return this.email().length > 0 && this.password().length > 0 && this.confirmPassword().length > 0 && this.role().length > 0 && this.name().length > 0 && EMAIL_REGEXP.test(this.email());
  }

    public isPasswordValid = computed(() => {
    return this.password().length > 0 && this.password() === this.confirmPassword();
  })

  public formValue = computed(() => {
    return {
      email: this.email(),
      password: this.password(),
      role: this.role(),
      name: this.name(),
      controls: null
    }
  })

  public onSubmit() {
    console.log(this.formValue())
    this.userService.createUserObserVable(this.formValue())
  }

}
