import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminSubCategory } from './model/adminSubCategory';
import { AdminSubCategoryNameDto } from './model/adminSubCategoryNameDto';

@Injectable({
    providedIn: 'root'
})
export class AdminTicketSubcategoryService {

    constructor(private http: HttpClient) { }

    getSubCategories(): Observable<Array<AdminSubCategoryNameDto>> {
        return this.http.get<Array<AdminSubCategoryNameDto>>("/api/admin/subcategories");
    }

    createSubCategory(value: any): Observable<AdminSubCategory> {
        return this.http.post<AdminSubCategory>("/api/admin/subcategories", value);
    }

    getSubCategory(id: number): Observable<AdminSubCategory> {
        return this.http.get<AdminSubCategory>("/api/admin/subcategories/" + id);
    }
    updateSubCategory(id: number, value: AdminSubCategory){
        return this.http.put<AdminSubCategory>("/api/admin/subcategories/" + id, value);
    }

    deleteSubCategory(id: number) {
        return this.http.delete("/api/admin/subcategories/" + id);
    }
    search(text: string): Observable<AdminSubCategoryNameDto[]>{
        return this.http.get<AdminSubCategoryNameDto[]>(`/api/admin/subcategories/search?text=${text}`);
    }
}
