import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminTicketForm } from '../model/adminTicketForm';

@Injectable({
    providedIn: 'root'
})
export class AdminTicketUpdateService {

    constructor(private http: HttpClient) { }

    getTicketForm(id: number): Observable<AdminTicketForm> {
        return this.http.get<AdminTicketForm>("/api/admin/ticketforms/" + id);
    }

    updateTicketForm(id: number, value: AdminTicketForm) {
        return this.http.put<AdminTicketForm>('/api/admin/ticketforms/' + id, value);
    }
}
