import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
export class AdminTicketFormComponent implements OnInit, OnDestroy {

    @Input() parentForm!: FormGroup;

    subcategories: Array<AdminSubCategoryNameDto> = [];
    controlTypes = Object.keys(ControlType);
    controlTypesForOptions = [ControlType.DROPDOWN];
    additionalOptions = false;
    @Input() dataSource: Array<BehaviorSubject<Array<any>>> = [];
    displayColumns = ['key', 'value', 'action']
    @Output("parentSubmit") parentSubmit: EventEmitter<any> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private adminTicketFormService: AdminTicketFormService
    ) { }

    ngOnInit(): void {
        this.getSubcategories();
        //this.addFieldForm(); 
    }

    ngOnDestroy(): void {
        this.dataSource.forEach(d => d.complete());
    }

    submit() {
        this.parentSubmit.emit();
    }
    addFieldForm() {
        const formFieldForm = this.formBuilder.group({
            id: [''],
            key: ['', Validators.required],
            label: ['', Validators.required],
            required: [false, Validators.required],
            order: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            controlType: ['', Validators.required],
            type: ['', Validators.required],
            options: this.formBuilder.array([])
        });

        this.formFields.push(formFieldForm);
        this.dataSource.push(new BehaviorSubject<AbstractControl[]>([]));
    }

    addOption(i: number) {
        console.log("adding option on row: " + i);
        const row = this.formBuilder.group({
            id: [''],
            key: ['', Validators.required],
            value: ['', Validators.required]
        });
        this.getOptions(i).push(row);
        this.updateView(i);
    }

    updateView(i: number) {
        console.log("update view by row id: " + i)
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

    get id() {
        return this.parentForm.get("id");
    }

    get key() {
        return this.parentForm.get("key");
    }

    get required() {
        return this.parentForm.get("required");
    }

    get label() {
        return this.parentForm.get("label");
    }

    get subCategoryId() {
        return this.parentForm.get("subCategoryId");
    }

    get formFields(): FormArray {
        let fa = this.parentForm.get("formFields") as FormArray;

        return this.parentForm.get("formFields") as FormArray;
    }

    get options(): FormArray {
        return this.parentForm.get("options") as FormArray;
    }
}
