import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCategory } from './model/adminCategory';
import { AdminCategoryNameDto } from './model/adminCategoryNameDto';

@Injectable({
    providedIn: 'root'
})
export class AdminCategoryService {

    constructor(private http: HttpClient) { }

    getCategories(): Observable<AdminCategoryNameDto[]> {
        return this.http.get<AdminCategoryNameDto[]>("api/admin/categories");
    }
    createCategory(value: any): Observable<AdminCategory> {
        return this.http.post<AdminCategory>("/api/admin/categories", value);
    }

    getCategory(id: number) {
        return this.http.get<AdminCategory>("/api/admin/categories/" + id);
    }

    saveCategory(id: number, value: any): Observable<AdminCategory> {
        return this.http.put<AdminCategory>("/api/admin/categories/" + id, value);
    }

    deleteCategory(id: number) {
        return this.http.delete("/api/admin/categories/" + id);
    }

    search(text: string): Observable<AdminCategoryNameDto[]>{
        return this.http.get<AdminCategoryNameDto[]>(`/api/admin/categories/search?text=${text}`);
    }
}
