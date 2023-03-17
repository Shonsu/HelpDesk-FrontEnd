import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './layouts/adminpage/adminpage.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminTicketCategoryAddComponent } from './modules/admin/admin-ticket-category/admin-ticket-category-add/admin-category-add.component';
import { AdminCategoryComponent } from './modules/admin/admin-ticket-category/admin-category.component';
import { AdminTicketComponent } from './modules/admin/admin-ticket/admin-ticket.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminTicketCategoryUpdateComponent } from './modules/admin/admin-ticket-category/admin-ticket-category-update/admin-ticket-category-update.component';

const routes: Routes = [
    { path: '', component: DefaultComponent, children: [] },
    {
        path: '', component: AdminpageComponent, children: [
            { path: 'admin', component: AdminComponent },
            { path: 'admin/tickets', component: AdminTicketComponent },
            { path: 'admin/categories', component: AdminCategoryComponent },
            { path: 'admin/categories/add', component: AdminTicketCategoryAddComponent },
            { path: 'admin/categories/update/:id', component: AdminTicketCategoryUpdateComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
