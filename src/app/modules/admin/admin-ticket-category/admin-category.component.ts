import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { AdminConfirmDialogService } from '../service/admin-confirm-dialog.service';
import { AdminMessageService } from '../service/admin-message.service';
import { AdminCategoryService } from './admin-category.service';
import { AdminCategoryNameDto } from './model/adminCategoryNameDto';

@Component({
    selector: 'app-admin-category',
    templateUrl: './admin-category.component.html',
    styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit, OnDestroy {

    @ViewChild(MatTable) table!: MatTable<any>;
    searchText$ = new Subject<string>();
    searchTextlength = 0;
    data: Array<AdminCategoryNameDto> = [];

    displayedColumns: string[] = ['id', 'label', 'actions'];
    private sub!: Subscription;

    constructor(
        private adminCategoryService: AdminCategoryService,
        private router: Router,
        private dialogService: AdminConfirmDialogService,
        private adminMessageService: AdminMessageService
    ) { }

    ngOnInit(): void {

        this.searchText$
            .pipe(debounceTime(500))
            .subscribe(searchText => {
                this.adminCategoryService.search(searchText)
                    .subscribe(categories => this.data = categories);
            });

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
            .subscribe(categories => this.data = categories);
    }

    searchOnKeyUp(event: any) {
        const searchText = event.target.value.trim();
        
        if (searchText.length >= 4) {
            this.searchTextlength = searchText.length;
            this.searchText$.next(searchText);
        } else if (searchText.length <= 3 && this.searchTextlength >= 4) {
            this.getCategories();
        }
    }

    confirmDelete(element: AdminCategoryNameDto) {
        this.dialogService.openCinfirmDialog("Are you sure to delete category: " + element.label + " ?")
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.adminCategoryService.deleteCategory(element.id)
                        .subscribe({
                            next: () => {
                                this.data.forEach((value, index) => {
                                    if (element == value) {
                                        this.data.splice(index, 1);
                                        this.table.renderRows();
                                    }
                                })
                            },
                            error: err => {
                                this.adminMessageService.addSpringErrors(err.error)
                            }
                        })
                }
            }
            );
    }
}
