import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      setTimeout(() => this.dialogRef.close('success'), 5000);
    } else {
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
