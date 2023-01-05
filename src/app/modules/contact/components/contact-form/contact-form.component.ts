import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) {}

  /**
   * Retorna true si el campo es inválido y ha sido tocado
   * @param control nombre del FormControl del FormGroup
   * @returns boolean
   */
  isTheFieldInvalid(control: string) {
    return (
      this.contactForm.controls[control].errors &&
      this.contactForm.controls[control].touched
    );
  }

  /**
   * Activa el modal cons los datos enviados por el formulario
   * y resetea el formulario
   */
  sendMessage() {
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      html: `
      <p>Nombre: ${this.contactForm.get('name')?.value}</p>
      <p>Correo: ${this.contactForm.get('email')?.value}</p>
      <p>Mensaje: ${this.contactForm.get('message')?.value}</p>
      `,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Cerrar',
    });

    this.contactForm.reset();
  }
}
