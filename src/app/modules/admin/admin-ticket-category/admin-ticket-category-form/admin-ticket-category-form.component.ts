import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-ticket-category-form',
    templateUrl: './admin-ticket-category-form.component.html',
    styleUrls: ['./admin-ticket-category-form.component.scss']
})
export class AdminTicketCategoryFormComponent implements OnInit {
    @Input() parentForm!: FormGroup;

    constructor() { }
    ngOnInit(): void {
    }

    get label() {
        return this.parentForm.get("label");
    }
    get description() {
        return this.parentForm.get("description");
    }

}