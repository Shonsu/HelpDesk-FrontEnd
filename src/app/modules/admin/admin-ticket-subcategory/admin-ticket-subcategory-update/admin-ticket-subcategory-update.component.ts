import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminMessageService } from '../../service/admin-message.service';
import { AdminTicketSubcategoryService } from '../admin-ticket-subcategory.service';
import { AdminSubCategory } from '../model/adminSubCategory';

@Component({
    selector: 'app-admin-ticket-subcategory-update',
    templateUrl: './admin-ticket-subcategory-update.component.html',
    styleUrls: ['./admin-ticket-subcategory-update.component.scss']
})
export class AdminTicketSubcategoryUpdateComponent implements OnInit {

    subCategoryForm!: FormGroup;

    constructor(
        private adminTicketSubcategoryService: AdminTicketSubcategoryService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private snackBar: MatSnackBar,
        private adminMessageService: AdminMessageService
    ) { }


    ngOnInit(): void {
        this.subCategoryForm = this.formBuilder.group({
            label: ["", [Validators.required, Validators.minLength(4)]],
            description: [""],
            ticketCategoryId: ['', Validators.required]
        })
        this.getSubcategory();
    }

    getSubcategory() {
        let id = Number(this.router.snapshot.params['id']);
        this.adminTicketSubcategoryService.getSubCategory(id)
            .subscribe(subCategory => this.mapFromValues(subCategory));
    }

    submit() {
        let id = Number(this.router.snapshot.params['id']);
        this.adminTicketSubcategoryService.updateSubCategory(id, this.subCategoryForm.value)
            .subscribe({
                next: subcategory => {
                    this.mapFromValues(subcategory);
                    this.snackBar.open("Cattegory has been updated", '', { duration: 3000 })
                },
                error: err => {
                    this.adminMessageService.addSpringErrors(err.error);
                }
            });
    }

    mapFromValues(subCategory: AdminSubCategory) {
        this.subCategoryForm.setValue({
            label: subCategory.label,
            description: subCategory.description,
            ticketCategoryId: subCategory.ticketCategoryId
        })
    }
}
