import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-admin-ticket-add',
    templateUrl: './admin-ticket-add.component.html',
    styleUrls: ['./admin-ticket-add.component.scss']
})
export class AdminTicketAddComponent implements OnInit {
    ticketForm!: FormGroup;
    constructor(
        private formBuilder: FormBuilder
    ) { }
    ngOnInit(): void {

        this.ticketForm = this.formBuilder.group({
            label: [''],
            formFields: this.formBuilder.array([])
        });
    }


}
