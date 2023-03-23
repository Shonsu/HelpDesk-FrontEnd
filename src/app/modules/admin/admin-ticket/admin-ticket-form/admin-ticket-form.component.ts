import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { AdminSubCategoryNameDto } from '../../common/model/adminSubCategoryNameDto';
import { ControlType } from '../../common/model/controlType';
import { AdminTicketFormService } from './admin-ticket-form.service';

@Component({
    selector: 'app-admin-ticket-form',
    templateUrl: './admin-ticket-form.component.html',
    styleUrls: ['./admin-ticket-form.component.scss']
})
export class AdminTicketFormComponent implements OnInit, OnDestroy {

    @Input() parentForm!: FormGroup;
    subcategories: Array<AdminSubCategoryNameDto> = [];
    controlTypes = Object.keys(ControlType);
    controlTypesForOptions = [ControlType.DROPDOWN];
    additionalOptions = false;
    dataSource: Array<BehaviorSubject<Array<any>>> = [];
    displayColumns = ['key', 'label', 'action']

    constructor(
        private formBuilder: FormBuilder,
        private adminTicketFormService: AdminTicketFormService
    ) { }

    ngOnInit(): void {
        this.getSubcategories();
    }

    ngOnDestroy(): void {
        this.dataSource.forEach(d => d.complete());
    }

    addFieldForm() {
        const formFieldForm = this.formBuilder.group({
            key: ['', Validators.required],
            label: ['', Validators.required],
            required: [false, Validators.required],
            order: ['', Validators.required],
            controlType: ['', Validators.required],
            type: ['', Validators.required],
            options: this.formBuilder.array([])
        });
        this.formFields.push(formFieldForm);
        this.dataSource.push(new BehaviorSubject<AbstractControl[]>([]));
    }

    addOption(i: number) {
        const row = this.formBuilder.group({
            key: ['', Validators.required],
            label: ['', Validators.required]
        });
        this.getOptions(i).push(row);
        this.updateView(i);
    }

    updateView(i: number) {
        this.dataSource.at(i)?.next(this.getOptions(i).controls);
    }

    deleteOption(formFieldIndex: number, optionsIndex: number) {
        this.getOptions(formFieldIndex).removeAt(optionsIndex);
        this.updateView(formFieldIndex);
    }

    clearOptionsForFieldFormRow(formFieldIndex: number) {
        this.getOptions(formFieldIndex).clear();
    }

    deleteFormField(formFieldIndex: number) {
        this.formFields.removeAt(formFieldIndex);
        this.dataSource.at(formFieldIndex)?.complete();
        this.dataSource.splice(formFieldIndex, 1);
    }

    getSubcategories() {
        this.adminTicketFormService.getSubcategories()
            .subscribe(subcategories => this.subcategories = subcategories);
    }

    changeControlType(event: any, formFieldIndex: number) {
        this.additionalOptions = this.controlTypesForOptions.some(el => el === event);
        if (!this.additionalOptions) {
            this.clearOptionsForFieldFormRow(formFieldIndex);
        }
    }

    formPreview() {
        let myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow?.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
    }

    getFormFields(): FormArray {
        return this.parentForm.get("formFields") as FormArray;
    }

    getOptions(formFieldIndex: number): FormArray {
        return this.getFormFields().at(formFieldIndex).get("options") as FormArray;
    }

    getCategoryId(formFieldIndex: number) {
        return this.getFormFields().at(formFieldIndex).get('categoryId');
    }

    get label() {
        return this.parentForm.get("label");
    }

    get subCategoryId() {
        return this.parentForm.get("subCategoryId");
    }

    get formFields(): FormArray {
        return this.parentForm.get("formFields") as FormArray;
    }

    get options(): FormArray {
        return this.parentForm.get("options") as FormArray;
    }
}
