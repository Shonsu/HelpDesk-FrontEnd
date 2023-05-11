import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdminMessageService } from '../../service/admin-message.service';
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
        private router: ActivatedRoute,
        private snackBar: MatSnackBar,
        private messageService: AdminMessageService
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
            .subscribe(ticketForm => {
                this.mapFromValues(ticketForm);
            });
    }

    mapFromValues(ticketForm: AdminTicketForm): void {
        ticketForm.ticketFormFields.sort((a, b) => a.order - b.order);
        this.ticketForm.patchValue({
            label: ticketForm.label,
            subCategoryId: ticketForm.subCategoryId
        });

        this.ticketForm.setControl('formFields', this.formBuilder.array([]));
        let i: number = 0;

        ticketForm.ticketFormFields.forEach(formField => {
            this.formFields.push(this.formBuilder.group({
                id: formField.id,
                key: formField.key,
                label: formField.label,
                required: formField.required,
                order: [formField.order, [Validators.required, Validators.pattern("^[0-9]*$")]],
                controlType: formField.controlType,
                type: formField.type,
                options: this.formBuilder.array([])
            }));

            this.dataSource.push(new BehaviorSubject<AbstractControl[]>([]));

            // this.getOptions(i).setControl(i, this.formBuilder.group([]));
            formField.options.forEach(option => {
                console.log(option);
                this.getOptions(i).push(this.formBuilder.group({
                    id: option.id,
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
        let fa = this.ticketForm.get("formFields") as FormArray;
        console.log(fa.value);
        return this.ticketForm.get("formFields") as FormArray;
    }

    submit() {
        let id = Number(this.router.snapshot.params['id']);

        this.ticketUpdateService.updateTicketForm(id, {
            label: this.ticketForm.get('label')?.value,
            subCategoryId: this.ticketForm.get('subCategoryId')?.value,
            ticketFormFields: this.ticketForm.get('formFields')?.value,
        } as AdminTicketForm).subscribe({
            next: ticketForm => {
                // this.dataSource.forEach(d => d.complete());
                // this.dataSource = [];
                this.mapFromValues(ticketForm);
                this.snackBar.open("Ticket form has been updated.", '', { duration: 3000 })
            },
            error: err => { this.messageService.addSpringErrors(err.error) }
        });

    }
}
