import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent {
  profiles = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 2, name: 'Ana López', email: 'ana.lopez@example.com' },
  ];

  viewProfile(profile: any) {
    console.log('Ver perfil', profile);
  }

  deleteProfile(profile: any) {
    console.log('Eliminar perfil', profile);
  }
}
