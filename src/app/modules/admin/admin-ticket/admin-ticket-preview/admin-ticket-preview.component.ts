import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckboxField } from '../../common/model/checboxField';
import { DropdownField } from '../../common/model/dropdownField';
import { FieldBase } from '../../common/model/fieldBase';
import { TextboxField } from '../../common/model/textboxField';
import { AdminFieldControllService } from '../../service/admin-field-controll.service';
import { AdminTicketForm } from '../model/adminTicketForm';
import { AdminTicketFormField } from '../model/adminTicketFormField';
import { AdminTicketPreviewService } from './admin-ticket-prewiew.service';

@Component({
    selector: 'app-admin-ticket-preview',
    templateUrl: './admin-ticket-preview.component.html',
    styleUrls: ['./admin-ticket-preview.component.scss']
})
export class AdminTicketPreviewComponent implements OnInit {

    @Input() fields: FieldBase<string>[] | null = [];
    form!: FormGroup;
    payLoad = '';
    requestedForm!: AdminTicketForm;
    constructor(private fcs: AdminFieldControllService,
        private ticketPreviewService: AdminTicketPreviewService,
        private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.getTicketForm();
    }

    getTicketForm() {
        let id = Number(this.router.snapshot.params['id']);
        this.ticketPreviewService.getTicketForm(id)
            .subscribe(ticketForm => {
                this.requestedForm = ticketForm as AdminTicketForm;
                ticketForm.ticketFormFields.forEach(field => {
                    this.mapToField(field);
                });
                this.form = this.fcs.toFormGroup(this.fields as FieldBase<string>[]);
                this.form.addControl('formId', new FormControl(ticketForm.id));
            });

    }

    private mapToField(field: AdminTicketFormField) {
        switch (field.controlType) {
            case "TEXTBOX":
                this.fields?.push(new TextboxField({
                    key: field.key,
                    label: field.label,
                    required: field.required,
                    order: field.order,
                    type: field.type
                }));
                break;
            case "DROPDOWN":
                this.fields?.push(new DropdownField({
                    key: field.key,
                    label: field.label,
                    required: field.required,
                    order: field.order,
                    options: field.options
                }));
                break;
            case "CHECKBOX":
                this.fields?.push(new CheckboxField({
                    key: field.key,
                    label: field.label,
                    required: field.required,
                    order: field.order
                }));
                break;
        }
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue(), null, 4);
    }
}
