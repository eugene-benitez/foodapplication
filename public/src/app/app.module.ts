import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './common/components/login-reg/login-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { HttpService } from './common/services/http.service';
import { MyEventsComponent } from './common/components/my-events/my-events.component';
import { AboutComponent } from './common/components/about/about.component';
import { MessageBoardComponent } from './common/components/message-board/message-board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    DashboardComponent,
    MyEventsComponent,
    AboutComponent,
    MessageBoardComponent,
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
