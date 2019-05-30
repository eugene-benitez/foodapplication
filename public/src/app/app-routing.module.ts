import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './common/components/login-reg/login-reg.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { MyEventsComponent } from './common/components/my-events/my-events.component';

const routes: Routes = [
  { path: '', component: LoginRegComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: MyEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
