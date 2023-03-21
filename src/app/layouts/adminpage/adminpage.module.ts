import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTicketComponent } from 'src/app/modules/admin/admin-ticket/admin-ticket.component';
import { AdminCategoryComponent } from 'src/app/modules/admin/admin-ticket-category/admin-category.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminpageComponent } from './adminpage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTicketCategoryAddComponent } from 'src/app/modules/admin/admin-ticket-category/admin-ticket-category-add/admin-category-add.component';
import { AdminTicketCategoryUpdateComponent } from 'src/app/modules/admin/admin-ticket-category/admin-ticket-category-update/admin-ticket-category-update.component';
import { AdminTicketCategoryFormComponent } from 'src/app/modules/admin/admin-ticket-category/admin-ticket-category-form/admin-ticket-category-form.component';
import { AdminTicketSubCategoryFormComponent } from 'src/app/modules/admin/admin-ticket-subcategory/admin-ticket-subcategory-form/admin-ticket-subcategory-form.component';
import { AdminTicketSubcategoryComponent } from 'src/app/modules/admin/admin-ticket-subcategory/admin-ticket-subcategory.component';
import { AdminTicketSubcategoryAddComponent } from 'src/app/modules/admin/admin-ticket-subcategory/admin-ticket-subcategory-add/admin-ticket-subcategory-add.component';
import { AdminTicketSubcategoryUpdateComponent } from 'src/app/modules/admin/admin-ticket-subcategory/admin-ticket-subcategory-update/admin-ticket-subcategory-update.component';
import { AdminMessageComponent } from 'src/app/modules/admin/component/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/component/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminTicketAddComponent } from 'src/app/modules/admin/admin-ticket/admin-ticket-add/admin-ticket-add.component';
import { AdminTicketUpdateComponent } from 'src/app/modules/admin/admin-ticket/admin-ticket-update/admin-ticket-update.component';
import { AdminTicketFormComponent } from 'src/app/modules/admin/admin-ticket/admin-ticket-form/admin-ticket-form.component';


@NgModule({
  declarations: [
    AdminpageComponent,
    AdminComponent,
    AdminTicketComponent,
    AdminCategoryComponent,
    AdminTicketCategoryAddComponent,
    AdminTicketCategoryUpdateComponent,
    AdminTicketCategoryFormComponent,
    AdminTicketSubcategoryComponent,
    AdminTicketSubcategoryAddComponent,
    AdminTicketSubcategoryUpdateComponent,
    AdminTicketSubCategoryFormComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    AdminTicketAddComponent,
    AdminTicketUpdateComponent,
    AdminTicketFormComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminpageModule { }
