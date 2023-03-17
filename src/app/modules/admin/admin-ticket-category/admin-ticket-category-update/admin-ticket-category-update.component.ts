import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminCategoryService } from '../admin-category.service';
import { AdminCategory } from '../model/adminCategory';

@Component({
    selector: 'app-admin-ticket-category-update',
    templateUrl: './admin-ticket-category-update.component.html',
    styleUrls: ['./admin-ticket-category-update.component.scss']
})
export class AdminTicketCategoryUpdateComponent implements OnInit {


    categoryForm!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private adminCategoryService: AdminCategoryService
    ) { }

    ngOnInit(): void {
        this.categoryForm = this.formBuilder.group({
            label: ["", [Validators.required, Validators.minLength(4)]],
            description: ["", [Validators.required]]
        })
        this.getCategory();
    }

    getCategory() {
        let id = Number(this.router.snapshot.params['id']);
        this.adminCategoryService.getCategory(id)
            .subscribe(category => { this.mapToFromValues(category) });
    }
    mapToFromValues(category: AdminCategory) {
        this.categoryForm.setValue({
            label: category.label,
            description: category.description
        });
    }

    submit() {
        let id = Number(this.router.snapshot.params['id']);
        this.adminCategoryService.saveCategory(id, this.categoryForm.value)
            .subscribe({
                next: category => {
                    this.mapToFromValues(category);
                },
                error: err => {

                }
            });
    }

}
