import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterBody } from './interfaces/auth.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private emailregex = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
  public registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    city: [''],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailregex),
      ],
    ],
    password: ['', Validators.required],
  });
  public hide = signal(true);

  toggleVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const body: RegisterBody = {
      firstName: this.registerForm.get('firstName')!.value ?? '',
      lastName: this.registerForm.get('lastName')!.value ?? '',
      email: this.registerForm.get('email')!.value ?? '',
      password: this.registerForm.get('password')!.value ?? '',
      city: this.registerForm.get('city')!.value ?? '',
    };

    this.authService.register(body).subscribe((valid) => {
      if (valid === true) {
        this.router.navigateByUrl('/');
      } else {
        console.error(valid)
      }
    });
  }
}
