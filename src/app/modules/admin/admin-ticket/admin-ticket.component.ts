import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogService } from '../service/admin-confirm-dialog.service';
import { AdminMessageService } from '../service/admin-message.service';
import { AdminTicketService } from './admin-ticket.service';
import { AdminTicketFormName } from './model/adminTicketFormName';

@Component({
    selector: 'app-admin-ticket',
    templateUrl: './admin-ticket.component.html',
    styleUrls: ['./admin-ticket.component.scss']
})
export class AdminTicketComponent implements OnInit {

    @ViewChild(MatTable) table!: MatTable<any>;
    data: Array<AdminTicketFormName> = [];
    displayColumns = ['id', 'label', 'actions'];

    constructor(
        private adminTicketService: AdminTicketService,
        private dialogService: AdminConfirmDialogService,
        private messageService: AdminMessageService
    ) { }

    ngOnInit(): void {
        this.getTicketForms();
    }

    getTicketForms() {
        this.adminTicketService.getTicketForms()
            .subscribe(ticektForms => this.data = ticektForms);
    }


    searchOnKeyUp(event: any) {

    }

    confirmDelete(element: any) {
        this.dialogService.openCinfirmDialog("Are you sure to delete " + element.label + " ?")
            .afterClosed().subscribe(result => {
                if (result) {
                    this.adminTicketService.deleteTicketForm(element.id)
                        .subscribe({
                            next: () => {
                                this.data.forEach((value, index) => {
                                    if (element == value) {
                                        this.data.splice(index, 1);
                                        this.table.renderRows();
                                    }
                                })
                            },
                            error: err => { this.messageService.addSpringErrors(err.error) }
                        })
                }
            })

    }


}
