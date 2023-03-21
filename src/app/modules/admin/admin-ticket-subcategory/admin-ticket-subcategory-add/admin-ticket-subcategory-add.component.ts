import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminMessageService } from '../../service/admin-message.service';
import { AdminTicketSubcategoryService } from '../admin-ticket-subcategory.service';

@Component({
    selector: 'app-admin-ticket-subcategory-add',
    templateUrl: './admin-ticket-subcategory-add.component.html',
    styleUrls: ['./admin-ticket-subcategory-add.component.scss']
})
export class AdminTicketSubcategoryAddComponent implements OnInit {

    subCategoryForm!: FormGroup;



    constructor(
        private formBuilder: FormBuilder,
        private adminTicketSubcategoryService: AdminTicketSubcategoryService,
        private router: Router,
        private adminMessageService: AdminMessageService 
    ) { }

    ngOnInit(): void {
        this.subCategoryForm = this.formBuilder.group({
            label: ['', [Validators.required, Validators.minLength(4)]],
            description: [''],
            ticketCategoryId: ['', Validators.required]
        })
    }

    submit() {
        this.adminTicketSubcategoryService.createSubCategory(this.subCategoryForm.value)
            .subscribe({
                next: subcategory => {
                    this.router.navigate(['/admin/subcategories'])
                        .then();
                },
                error: err => {
                    this.adminMessageService.addSpringErrors(err.error);
                }
            })
    }
}
