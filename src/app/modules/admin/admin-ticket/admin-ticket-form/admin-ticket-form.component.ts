import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin-ticket-form',
    templateUrl: './admin-ticket-form.component.html',
    styleUrls: ['./admin-ticket-form.component.scss']
})
export class AdminTicketFormComponent {
    @Input() parentForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    addLesson() {
        const formFieldForm = this.formBuilder.group({
            id: ['', Validators.required],
            key: ['', Validators.required],
            label: ['', Validators.required],
            required: ['', Validators.required],
            order: ['', Validators.required],
            controlType: ['', Validators.required]
        });
        this.formFields.push(formFieldForm);
    }

    deleteFormField(formFieldIndex: number) {
        this.formFields.removeAt(formFieldIndex);
      }

    get label() {
        return this.parentForm.get("label");
    }
    get formFields() {
        return this.parentForm.get("formFields") as FormArray;
        //return this.parentForm.controls["ticketFormFields"] as FormArray;
    }
}
