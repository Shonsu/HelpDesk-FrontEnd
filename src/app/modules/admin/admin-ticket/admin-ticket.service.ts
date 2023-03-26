import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminConfirmDialogService } from '../service/admin-confirm-dialog.service';
import { AdminTicketFormName } from './model/adminTicketFormName';

@Injectable({
    providedIn: 'root'
})
export class AdminTicketService {

    constructor(private http: HttpClient) { }

    getTicketForms(): Observable<Array<AdminTicketFormName>> {
        return this.http.get<Array<AdminTicketFormName>>("/api/admin/ticketforms");
    }

    deleteTicketForm(id: number): Observable<void>{
        return this.http.delete<void>("/api/admin/ticketforms/" + id);
    }
}
