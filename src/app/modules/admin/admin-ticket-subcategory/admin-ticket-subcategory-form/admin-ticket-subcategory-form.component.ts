import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AdminTicketSubcategoryFormService } from "./admin-ticket-subcategory-form.service";
import { AdminCategoryNameDto } from "./dto/adminCategoryNameDto";

@Component({
    selector: 'app-admin-ticket-subcategory-form',
    templateUrl: './admin-ticket-subcategory-form.component.html',
    styleUrls: ['./admin-ticket-subcategory-form.component.scss']
})
export class AdminTicketSubCategoryFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;
    categories: Array<AdminCategoryNameDto> = [];

    constructor(
        private adminTicketSubcategoryFormService: AdminTicketSubcategoryFormService
    ) { }
    ngOnInit(): void {
        this.getParentCategories();
    }

    getParentCategories() {
        this.adminTicketSubcategoryFormService.getCategories()
            .subscribe(categories => this.categories = categories);
    }

    get label() {
        return this.parentForm.get("label");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get ticketCategoryId() {
        return this.parentForm.get("ticketCategoryId");
    }

}