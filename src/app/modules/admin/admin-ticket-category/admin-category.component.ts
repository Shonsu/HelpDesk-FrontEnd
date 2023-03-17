import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminCategoryService } from './admin-category.service';
import { AdminCategoryNameDto } from './model/adminCategoryNameDto';

@Component({
    selector: 'app-admin-category',
    templateUrl: './admin-category.component.html',
    styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit, OnDestroy {

    @ViewChild(MatTable) table!: MatTable<any>;

    //data: Array<AdminCategoryNameDto> = [];
    data!:any;
    displayedColumns: string[] = ['id', 'label', 'actions'];
    private sub!: Subscription;

    constructor(
        private adminCategoryService: AdminCategoryService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.sub = this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.getCategories();
                }
            }
        )
        this.getCategories();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getCategories() {
        this.adminCategoryService.getCategories()
            .subscribe(categories => this.data = new MatTableDataSource(categories));
    }
    applyFilter(event: Event){
        const filterValue = (event.target as HTMLInputElement).value;
        this.data.filter = filterValue.trim().toLowerCase();
    }

    confirmDelete(element: AdminCategoryNameDto){

    }
}
