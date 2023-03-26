import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdminTicketForm } from '../model/adminTicketForm';
import { AdminTicketUpdateService } from './admin-ticket-update.service';

@Component({
    selector: 'app-admin-ticket-update',
    templateUrl: './admin-ticket-update.component.html',
    styleUrls: ['./admin-ticket-update.component.scss']
})
export class AdminTicketUpdateComponent implements OnInit {

    ticketForm!: FormGroup;
    dataSource: Array<BehaviorSubject<Array<any>>> = [];
    constructor(
        private formBuilder: FormBuilder,
        private ticketUpdateService: AdminTicketUpdateService,
        private router: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getTicketForm();
        this.ticketForm = this.formBuilder.group({
            label: ['', Validators.required],
            subCategoryId: ['', Validators.required],
            formFields: this.formBuilder.array([])
        });
    }


    getTicketForm() {
        let id = Number(this.router.snapshot.params['id']);
        this.ticketUpdateService.getTicketForm(id)
            .subscribe(ticketForm => this.mapFromValues(ticketForm));
    }

    mapFromValues(ticketForm: AdminTicketForm): void {

        this.ticketForm.patchValue({
            label: ticketForm.label,
            subCategoryId: ticketForm.subCategoryId
        });

        this.ticketForm.setControl('formFields', this.formBuilder.array([]));
        let i: number = 0;

        ticketForm.ticketFormFields.forEach(formField => {
            this.formFields.push(this.formBuilder.group({
                key: formField.key,
                label: formField.label,
                required: formField.required,
                order: formField.order,
                controlType: formField.controlType,
                type: formField.type,
                options: this.formBuilder.array([])
            }));

            this.dataSource.push(new BehaviorSubject<AbstractControl[]>([]));
           
            // this.getOptions(i).setControl(i, this.formBuilder.group([]));
            formField.options.forEach(option => {
                console.log(option);
                this.getOptions(i).push(this.formBuilder.group({
                    key: option.key,
                    value: option.value
                }));
                this.updateView(i);
            });
            i++;

        });

    }
    updateView(i: number) {
        this.dataSource.at(i)?.next(this.getOptions(i).controls);
    }

    getOptions(formFieldIndex: number): FormArray {
        return this.getFormFields().at(formFieldIndex).get("options") as FormArray;
    }

    getFormFields(): FormArray {
        return this.ticketForm.get("formFields") as FormArray;
    }

    get formFields(): FormArray {
        return this.ticketForm.get("formFields") as FormArray;
    }

    submit() { }
}
