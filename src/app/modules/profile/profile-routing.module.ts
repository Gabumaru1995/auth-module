import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';

const routes: Routes = [
  { path: '', component: ProfileListComponent }, // Listado de perfiles
  { path: 'create', component: ProfileFormComponent }, // Crear un perfil
  { path: 'edit/:id', component: ProfileFormComponent }, // Editar un perfil
  { path: 'detail/:id', component: ProfileDetailComponent }, // Detalles de un perfil
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
