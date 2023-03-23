import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminSubCategory } from '../../admin-ticket-subcategory/model/adminSubCategory';
import { AdminSubCategoryNameDto } from '../../common/model/adminSubCategoryNameDto';

@Injectable({
    providedIn: 'root'
})
export class AdminTicketFormService {

    constructor(private http: HttpClient) { }

    getSubcategories(): Observable<Array<AdminSubCategoryNameDto>> {
        return this.http.get<Array<AdminSubCategoryNameDto>>("/api/admin/subcategories");
    }
}
