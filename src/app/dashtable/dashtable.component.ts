import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
	selector: 'app-dashtable',
	templateUrl: './dashtable.component.html',
	styleUrls: ['./dashtable.component.scss']
})

export class DashTableComponent implements AfterViewInit {
	displayedColumns = ['siteName', 'content', 'ncontainers', 'amount','time','fillpercent'];
    dataSource= new MatTableDataSource(ELEMENT_DATA);
    constructor() { }
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
	ncontainers: number;
	amount: string;
	time:string;
	date:string;
	fill:number;
}
const ELEMENT_DATA: Element[] = [
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:80},
	{siteName: '9570 Jacinthe Greens Suite 567', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:70},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:60},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:50},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:40},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:30},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:20},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:10},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:0},
	{siteName: '100 Washington St ', content: 'Trash', ncontainers: 1, amount: '0.3 yd³',time: "Yesterday",date:"Fri,09 Mar", fill:90},
];