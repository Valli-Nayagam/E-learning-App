import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  // { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EmployeeListComponent },
  { path: 'details', component: EmployeeDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'table', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeDetailComponent, EmployeeListComponent]
