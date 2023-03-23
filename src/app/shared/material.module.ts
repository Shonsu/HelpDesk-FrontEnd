import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatListModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatSelectModule,
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule
    ],
    exports: [
        MatListModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatSelectModule,
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule
    ]
})
export class MaterialModule { }
