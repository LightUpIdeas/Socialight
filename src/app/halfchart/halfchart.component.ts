import { Component, AfterViewInit,ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-halfchart',
	templateUrl: './halfchart.component.html',
	styleUrls: ['./halfchart.component.scss']
})

export class HalfChartComponent {
	constructor() { }
		filters = [
			{value: '1', viewValue: 'Last Year'},
			{value: '2', viewValue: 'Last Month'},
			{value: '3', viewValue: 'Last 2 Years'}
		];
	   	Highcharts = Highcharts
	  	halfChartOptions={
	  		chart: {
	        	type: 'spline'
		    },
		    title: {
		        text: ''
		    },
		   
		    xAxis: {
		        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		    },
		    yAxis: [{ // Primary  yAxis
		        labels: {
		            format: '{value}%',
		            style: {
		                color: '#ff8820'
		            }
		        },
		        title: {
		            text: 'Generation(tons)',
		            style: {
		                color: '#ff8820'
		            }
		        },

		    },{ // Secondary yAxis
		        labels: {
		            format: '{value}',
		            style: {
		                color: "#88bb44"
		            }
		        },
		        title: {
		            text: 'Number of Locations',
		            style: {
		                color: "#88bb44"
		            }
		        },
		        opposite: true

		    }],
		    series: [{
		    	showInLegend: false,               
		        name: 'Locations',
		        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
	            color: '#88bb44',
	            yAxis:1
		    }, {
		    	showInLegend: false,               
		        name: 'Rate',
		        color: "#ff8820",
		        data: [3.9, 4.2, 5.7, 8.5, 11.9, 31.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		    }]
	  	}

}