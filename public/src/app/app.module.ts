import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './common/components/login-reg/login-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { HttpService } from './common/services/http.service';
<<<<<<< HEAD
import { MyEventsComponent } from './common/components/my-events/my-events.component';

=======
import { CreateEventComponent } from './common/components/create-event/create-event.component';

import { MyEventsComponent } from './common/components/my-events/my-events.component';

import { AboutComponent } from './common/components/about/about.component';

>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    DashboardComponent,
<<<<<<< HEAD
    MyEventsComponent,
=======
    CreateEventComponent,

    MyEventsComponent,

    AboutComponent,

>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
