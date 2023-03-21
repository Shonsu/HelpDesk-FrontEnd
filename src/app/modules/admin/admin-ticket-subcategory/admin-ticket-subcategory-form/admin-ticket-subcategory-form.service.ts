import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCategoryNameDto } from './dto/adminCategoryNameDto';

@Injectable({
    providedIn: 'root'
})
export class AdminTicketSubcategoryFormService {

    constructor(private http: HttpClient) { }
    getCategories(): Observable<Array<AdminCategoryNameDto>> {
        return this.http.get<Array<AdminCategoryNameDto>>("/api/admin/categories");
    }
}
