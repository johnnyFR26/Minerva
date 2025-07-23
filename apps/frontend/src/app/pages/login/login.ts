import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EMAIL_REGEXP } from '../../utils/email-validator';
import { User } from '@services/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@components/snackbar/snackbar';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  public email = signal('')
  public password = signal('')
  public showPassword = true
  private userService = inject(User)
  private router = inject(Router)

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  public formValue = computed(() => {
    return {
      email: this.email(),
      password: this.password()
    }
  })

   public isFormValid = computed(() => {
   
    return this.email().length > 0 && this.password().length > 0 && EMAIL_REGEXP.test(this.email());
  });

  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message},
    });
  }

  onSubmit() {
    console.log(this.formValue())

    this.userService.loginUser(this.formValue()).subscribe({
      next: (res) => {
        this.userService.setCurrentUser({User: res.user, token: res.token})
        this.router.navigate(['/dashboard'])
      },
      error: (err) => {
        console.log(err)
        this.openSnackBar(err.error.message)
      }
    })
  }
}
