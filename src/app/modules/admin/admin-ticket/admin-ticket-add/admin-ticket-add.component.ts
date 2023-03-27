import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminMessageService } from '../../service/admin-message.service';
import { AdminTicketForm } from '../model/adminTicketForm';
import { AdminTicketAddService } from './admin-ticket-add.service';

@Component({
    selector: 'app-admin-ticket-add',
    templateUrl: './admin-ticket-add.component.html',
    styleUrls: ['./admin-ticket-add.component.scss']
})
export class AdminTicketAddComponent implements OnInit {
    ticketForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private adminTicketAddService: AdminTicketAddService,
        private messageService: AdminMessageService,
        private snackBar: MatSnackBar,
        private router: Router

    ) { }
    ngOnInit(): void {

        this.ticketForm = this.formBuilder.group({
            label: ['', Validators.required],
            subCategoryId: ['', Validators.required],
            formFields: this.formBuilder.array([])
        });
    }

    submit() {
        this.adminTicketAddService.saveFormTicket({
            label: this.ticketForm.get('label')?.value,
            subCategoryId: this.ticketForm.get('subCategoryId')?.value,
            ticketFormFields: this.ticketForm.get('formFields')?.value,
        } as AdminTicketForm).subscribe({
            next: ticketForm => {
                this.router.navigate(["/admin/tickets/update/", ticketForm.id])
                    .then(() => this.snackBar.open("Ticket form has been added.", '', { duration: 3000 }))
            },
            error: err => { this.messageService.addSpringErrors(err.error) }
        });
    }


}
