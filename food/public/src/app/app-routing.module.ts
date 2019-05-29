import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './common/components/login-reg/login-reg.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginRegComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
