import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog-component/course-dialog-component.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes = [
        {
            path     : '',
            component: HomeComponent
        }
    ];

@NgModule({
        declarations: [
            HomeComponent,
            CourseDialogComponent,
        ],
        imports     : [
            RouterModule.forChild(routes),
            MatPaginatorModule,
            MatTableModule,
            MatButtonModule,
            MatSortModule,
            MatSidenavModule,
            MatDialogModule,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
        ],
        exports     : [
            HomeComponent,
            MatDialogModule
        ],
        entryComponents: [CourseDialogComponent]
    })

export class HomeModule
{
}