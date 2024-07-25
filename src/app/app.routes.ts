import { Routes, RouterModule } from '@angular/router';
import { DoorInfoCardComponent } from './door-info-card/door-info-card.component';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { DoorsListComponent } from './doors-list/doors-list.component';

export const routes: Routes = [
  // { path: '', component: LoginFormComponent },
  { path: 'DoorInfo', component: DoorInfoCardComponent },
  { path: '', component: DoorsListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
