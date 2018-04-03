import { Component,OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AlertService, RequestService } from '../_services/index';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterViewInit {
	displayedColumns = ['siteName', 'content', 'quantity', 'type','containerSize','collectionDays','lastCollection','nextCollection'];
    dataSource= new MatTableDataSource(ELEMENT_DATA);
   	res: any = {};

    constructor(
    	private requestService: RequestService,
    	private alertService: AlertService
    ) { }
    ngOnInit() {

	  	// this.requestService.pickUpSchedule()
	   //    .subscribe(
	   //      data => {
	   //      	this.res = data;
	   //      	console.log("Request",this.res)
	   //      },
	   //      error => {
	   //        this.alertService.error(error);
	   //      });
	}
    @ViewChild(MatPaginator) paginator: MatPaginator;

  	ngAfterViewInit() {
    	this.dataSource.paginator = this.paginator;
  	}
  	applyFilter(filterValue: string) {
	    filterValue = filterValue.trim();
	    filterValue = filterValue.toLowerCase();
	    this.dataSource.filter = filterValue;
	}

}
export interface Element {
	siteName: string;
	content: string;
	quantity: number;
	type: string;
	containerSize:string;
}
const ELEMENT_DATA: Element[] = [
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
	{siteName: "123 Enevo Park", content: 'Trash', quantity: 27, type: 'Regular',containerSize: "Large"},
];
