import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './common/components/login-reg/login-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { HttpService } from './common/services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    DashboardComponent
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
