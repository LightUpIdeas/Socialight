import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	MatDividerModule,
	MatInputModule, 
	MatButtonModule, 
	MatSelectModule, 
	MatIconModule,
	MatTableModule, 
	MatToolbarModule, 
	MatPaginatorModule, 
	MatSortModule,
	MatProgressSpinnerModule,
	MatProgressBarModule,
	MatMenuModule,
	MatCardModule
} from '@angular/material';

@NgModule({
imports: [
	CommonModule,
	MatDividerModule,
	MatInputModule, 
	MatButtonModule,
	MatSelectModule,
	MatIconModule, 
	MatToolbarModule, 
	MatTableModule, 
	MatPaginatorModule, 
	MatSortModule,
	MatProgressSpinnerModule,
	MatMenuModule,
	MatProgressBarModule,
	MatCardModule
],
exports: [
	CommonModule,
	MatDividerModule,
	MatInputModule, 
	MatButtonModule,
	MatSelectModule,
	MatIconModule, 
	MatToolbarModule, 
	MatTableModule, 
	MatPaginatorModule, 
	MatSortModule,
	MatProgressSpinnerModule,
	MatMenuModule,
	MatProgressBarModule,
	MatCardModule
],
})
export class CustomMaterialModule { }
