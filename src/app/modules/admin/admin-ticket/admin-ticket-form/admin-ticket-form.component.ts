import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AdminSubCategoryNameDto } from '../../common/model/adminSubCategoryNameDto';
import { ControlType } from '../../common/model/controlType';
import { AdminTicketFormService } from './admin-ticket-form.service';

@Component({
    selector: 'app-admin-ticket-form',
    templateUrl: './admin-ticket-form.component.html',
    styleUrls: ['./admin-ticket-form.component.scss']
})
export class AdminTicketFormComponent implements OnInit {
    @Input() parentForm!: FormGroup;
    subcategories: Array<AdminSubCategoryNameDto> = [];
    controlTypes = Object.keys(ControlType);
    additionalOptions = false;
    dataSource = new BehaviorSubject<AbstractControl[]>([]);
    displayColumns = ['key', 'label', 'action']
    rows: FormArray = this.formBuilder.array([]);
    constructor(
        private formBuilder: FormBuilder,
        private adminTicketFormService: AdminTicketFormService
    ) { }

    ngOnInit(): void {
        this.getSubcategories();
    }

    addFieldForm() {
        const formFieldForm = this.formBuilder.group({
            id: ['', Validators.required],
            key: ['', Validators.required],
            label: ['', Validators.required],
            required: ['', Validators.required],
            order: ['', Validators.required],
            controlType: ['', Validators.required],
            type: ['', Validators.required],
            options: this.rows
        });
        this.formFields.push(formFieldForm);
    }

    addOption() {
        const row = this.formBuilder.group({
            key: [''],
            value: ['']
        });
        this.rows.push(row);
        this.updateView();
    }
    deleteOption(index: number) {
        this.rows.removeAt(index);
        this.updateView();
    }

    updateView() {
        this.dataSource.next(this.rows.controls);
    }

    deleteFormField(formFieldIndex: number) {
        this.formFields.removeAt(formFieldIndex);
    }

    getSubcategories() {
        this.adminTicketFormService.getSubcategories()
            .subscribe(subcategories => this.subcategories = subcategories);
    }
    changeControlType(event: any) {
        console.log(event);
    }

    formPreview() {
        let myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow?.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
    }

    get label() {
        return this.parentForm.get("label");
    }
    get formFields() {
        return this.parentForm.get("formFields") as FormArray;
        //return this.parentForm.controls["ticketFormFields"] as FormArray;
    }
    get subCategoryId() {
        return this.parentForm.get("subCategoryId");
    }

    get options() {
        return this.parentForm.get("options") as FormArray;

    }
}
