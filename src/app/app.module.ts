import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TwowaybindingComponent,
    routingComponents,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
