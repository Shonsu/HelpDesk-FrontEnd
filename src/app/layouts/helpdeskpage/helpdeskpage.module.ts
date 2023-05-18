import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskpageComponent } from './helpdeskpage.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpdeskComponent } from 'src/app/modules/helpdesk/helpdesk/helpdesk.component';



@NgModule({
    declarations: [
        HelpdeskpageComponent,
        HelpdeskComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class HelpdeskpageModule { }
