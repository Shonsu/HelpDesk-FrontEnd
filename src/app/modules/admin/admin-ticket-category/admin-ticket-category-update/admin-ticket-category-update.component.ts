import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminMessageService } from '../../service/admin-message.service';
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
        private adminCategoryService: AdminCategoryService,
        private adminMessageService: AdminMessageService,
        private snackBar: MatSnackBar
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
    
    submit() {
        let id = Number(this.router.snapshot.params['id']);
        this.adminCategoryService.saveCategory(id, this.categoryForm.value)
        .subscribe({
            next: category => {
                this.mapToFromValues(category);
                this.snackBar.open("Cattegory has been updated", '', { duration: 3000 })
            },
            error: err => {
                this.adminMessageService.addSpringErrors(err.error)
            }
        });
    }

    mapToFromValues(category: AdminCategory) {
        this.categoryForm.setValue({
            label: category.label,
            description: category.description
        });
    }
    
}
