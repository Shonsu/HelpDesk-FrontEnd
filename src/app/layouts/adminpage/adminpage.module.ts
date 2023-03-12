import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTicketComponent } from 'src/app/modules/admin/admin-ticket/admin-ticket.component';
import { AdminCategoryComponent } from 'src/app/modules/admin/admin-category/admin-category.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminpageComponent } from './adminpage.component';



@NgModule({
  declarations: [
    AdminpageComponent,
    AdminComponent,
    AdminTicketComponent,
    AdminCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminpageModule { }
