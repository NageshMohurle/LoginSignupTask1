import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SignupComponent {

  existingUser: string = "nageshwar@gmail.com"; 


  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };

 
  existingEmailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    return email === this.existingUser ? { emailExists: true } : null;
  };

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
      this.existingEmailValidator  
    ]],
    mobile: ['', [
      Validators.pattern(/^[0-9+\-,]*$/),
      Validators.minLength(10)
    ]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    confirmPassword: ['', [Validators.required]],
    agreeTerms: [false, Validators.requiredTrue]
  }, { validators: this.passwordMatchValidator });

  constructor(private fb: FormBuilder, private router: Router) { }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

 
    alert('Signup successful');
    setTimeout(() => this.router.navigate(['/login']), 5000);
  }

  get passwordMismatchError() {
    return this.signupForm.hasError('passwordMismatch') && this.signupForm.get('confirmPassword')?.touched;
  }

  get emailExistsError() {
    return this.signupForm.controls['email'].hasError('emailExists') && this.signupForm.controls['email'].touched;
  }
}
