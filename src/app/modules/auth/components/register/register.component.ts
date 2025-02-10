// src/app/modules/auth/components/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';

@Component({
  standalone:false,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  // Constructor con FormBuilder correctamente inicializado
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    // Inicialización de registerForm dentro del constructor
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  // Método para verificar si el campo es inválido
  isFieldInvalid(field: string): boolean {
    const control = this.registerForm.get(field);
    return (control?.invalid ?? false) && (control?.touched ?? false);
  }

  // Método para el registro de usuario
  onRegister(): void {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      const user = { username, email, password };

      this.userService.register(user).subscribe(
        (response) => {
          // Redirigir o mostrar mensaje de éxito
          this.router.navigate(['/login']);
        },
        (error) => {
          // Manejar error
          console.error('Error en el registro', error);
        }
      );
    }
  }
}
