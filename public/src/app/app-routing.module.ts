import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './common/components/login-reg/login-reg.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
<<<<<<< HEAD
import { MyEventsComponent } from './common/components/my-events/my-events.component';

const routes: Routes = [
  { path: '', component: LoginRegComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: MyEventsComponent },
=======
import { CreateEventComponent } from './common/components/create-event/create-event.component';

import { MyEventsComponent } from './common/components/my-events/my-events.component';

import { AboutComponent } from './common/components/about/about.component';

const routes: Routes = [
  { path: '', component: LoginRegComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-event', component: CreateEventComponent },

  { path: 'events', component: MyEventsComponent },

  { path: 'about', component: AboutComponent },

>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
