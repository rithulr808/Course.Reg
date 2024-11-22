import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  // onSubmit() {
  //   this.submitted = true;
  //   const { email, password } = this.form.value;
  //
  //   // stop here if form is invalid
  //   if (this.form.invalid) {
  //     return;
  //   }
  //
  //   this._router.navigate(['/']);
  // }
  onSubmit() {
       this.submitted = true;
       const { username, password } = this.form.value;

    // Stop if the form is invalid
    if (this.form.invalid) {
      return;
    }

    // Prepare the data to send
    const requestBody = {
      username: username,
      password: password,
      confirmPassword: password,
    };

    // Make the POST request
    fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type
      },
      body: JSON.stringify(requestBody), // Convert requestBody to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        console.log('Registration successful:', data);

        // Navigate to the home page or another route
        this._router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  }

}
