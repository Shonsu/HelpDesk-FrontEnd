import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminMessageService } from '../../service/admin-message.service';
import { AdminCategoryService } from '../admin-category.service';

@Component({
    selector: 'app-admin-category-add',
    templateUrl: './admin-category-add.component.html',
    styleUrls: ['./admin-category-add.component.scss']
})
export class AdminTicketCategoryAddComponent implements OnInit {
    categoryForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private adminCategoryService: AdminCategoryService,
        private snackBar: MatSnackBar,
        private adminMessageService: AdminMessageService
    ) { }
    ngOnInit(): void {
        this.categoryForm = this.formBuilder.group({
            label: ["", [Validators.required, Validators.minLength(4)]],
            description: [""]
        })
    }
    submit() {

        this.adminCategoryService.createCategory(this.categoryForm.value)
            .subscribe({
                next: category => {
                    this.router.navigate(["/admin/categories"])
                        .then(() => this.snackBar.open("Category has been added", '', { duration: 3000 }));
                },
                error: err => this.adminMessageService.addSpringErrors(err.error)

            })
    }
}
