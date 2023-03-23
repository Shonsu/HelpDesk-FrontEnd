import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { AdminConfirmDialogService } from '../service/admin-confirm-dialog.service';
import { AdminMessageService } from '../service/admin-message.service';
import { AdminTicketSubcategoryService } from './admin-ticket-subcategory.service';
import { AdminSubCategoryNameDto } from '../common/model/adminSubCategoryNameDto';

@Component({
    selector: 'app-admin-ticket-subcategory',
    templateUrl: './admin-ticket-subcategory.component.html',
    styleUrls: ['./admin-ticket-subcategory.component.scss']
})
export class AdminTicketSubcategoryComponent implements OnInit, OnDestroy {

    @ViewChild(MatTable) table!: MatTable<any>;
    data: Array<AdminSubCategoryNameDto> = [];
    displayedColumns: string[] = ['id', 'label', 'actions'];
    private sub!: Subscription;
    searchText$ = new Subject<string>();
    searchTextlength = 0;
    constructor(
        private ticketSubcategoryService: AdminTicketSubcategoryService,
        private router: Router,
        private adminTicketSubCategoryService: AdminTicketSubcategoryService,
        private dialogService: AdminConfirmDialogService,
        private adminMessageService: AdminMessageService
    ) { }

    ngOnInit(): void {
        this.searchText$
            .pipe(debounceTime(500))
            .subscribe(searchText => this.adminTicketSubCategoryService.search(searchText)
                .subscribe(subCategories => this.data = subCategories));

        this.sub = this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.getSubcategories();
                }
            }
        );
        this.getSubcategories();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    searchOnKeyUp(event: any) {
        const searchText = event.target.value.trim();

        if (searchText.length >= 4) {
            this.searchTextlength = searchText.length;
            this.searchText$.next(searchText);
        } else if (searchText.length <= 3 && this.searchTextlength >= 4) {
            this.getSubcategories();
        }
    }

    getSubcategories() {
        this.ticketSubcategoryService.getSubCategories()
            .subscribe(subcategories => this.data = subcategories);
    }

    confirmDelete(element: AdminSubCategoryNameDto) {
        this.dialogService.openCinfirmDialog("Are you sure to delete subcategory: " + element.label + " ?")
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.adminTicketSubCategoryService.deleteSubCategory(element.id)
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
