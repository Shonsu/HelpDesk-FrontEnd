import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminTicketForm } from '../model/adminTicketForm';

@Injectable({
    providedIn: 'root'
})
export class AdminTicketAddService {

    constructor(private http: HttpClient) { }

    saveFormTicket(ticket: AdminTicketForm): Observable<AdminTicketForm> {
        return this.http.post<AdminTicketForm>("/api/admin/ticketforms", ticket);
    }
}
