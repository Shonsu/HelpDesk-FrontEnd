import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './layouts/adminpage/adminpage.component';
import { AdminpageemptyComponent } from './layouts/adminpageempty/adminpageempty.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { AdminCategoryComponent } from './modules/admin/admin-ticket-category/admin-category.component';
import { AdminTicketCategoryAddComponent } from './modules/admin/admin-ticket-category/admin-ticket-category-add/admin-category-add.component';
import { AdminTicketCategoryUpdateComponent } from './modules/admin/admin-ticket-category/admin-ticket-category-update/admin-ticket-category-update.component';
import { AdminTicketSubcategoryAddComponent } from './modules/admin/admin-ticket-subcategory/admin-ticket-subcategory-add/admin-ticket-subcategory-add.component';
import { AdminTicketSubcategoryUpdateComponent } from './modules/admin/admin-ticket-subcategory/admin-ticket-subcategory-update/admin-ticket-subcategory-update.component';
import { AdminTicketSubcategoryComponent } from './modules/admin/admin-ticket-subcategory/admin-ticket-subcategory.component';
import { AdminTicketAddComponent } from './modules/admin/admin-ticket/admin-ticket-add/admin-ticket-add.component';
import { AdminTicketPreviewComponent } from './modules/admin/admin-ticket/admin-ticket-preview/admin-ticket-preview.component';
import { AdminTicketUpdateComponent } from './modules/admin/admin-ticket/admin-ticket-update/admin-ticket-update.component';
import { AdminTicketComponent } from './modules/admin/admin-ticket/admin-ticket.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';

const routes: Routes = [
    { path: '', component: DefaultComponent, children: [] },
    {
        path: '', component: AdminpageComponent, children: [
            { path: 'admin', component: AdminComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/tickets', component: AdminTicketComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/tickets/add', component: AdminTicketAddComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/tickets/update/:id', component: AdminTicketUpdateComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/tickets/preview/:id', component: AdminTicketPreviewComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/categories', component: AdminCategoryComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/categories/add', component: AdminTicketCategoryAddComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/categories/update/:id', component: AdminTicketCategoryUpdateComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/subcategories', component: AdminTicketSubcategoryComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/subcategories/add', component: AdminTicketSubcategoryAddComponent, canActivate: [AdminAuthorizeGuard] },
            { path: 'admin/subcategories/update/:id', component: AdminTicketSubcategoryUpdateComponent, canActivate: [AdminAuthorizeGuard] }
        ]
    },
    {
        path: '', component: AdminpageemptyComponent, children: [
            { path: 'admin/login', component: AdminLoginComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
