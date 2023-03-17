import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatListModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule
    ],
    exports: [
        MatListModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule
    ]
})
export class MaterialModule { }
