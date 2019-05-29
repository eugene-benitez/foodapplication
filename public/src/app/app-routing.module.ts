import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './common/components/login-reg/login-reg.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { CreateEventComponent } from './common/components/create-event/create-event.component';

const routes: Routes = [
  { path: '', component: LoginRegComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-event', component: CreateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
