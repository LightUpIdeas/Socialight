import { Component, AfterViewInit,ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-fullchart',
	templateUrl: './fullchart.component.html',
	styleUrls: ['./fullchart.component.scss']
})

export class FullChartComponent {
	constructor() { }
	filters = [
		{value: '1', viewValue: 'Last Year'},
		{value: '2', viewValue: 'Last Month'},
		{value: '3', viewValue: 'Last 2 Years'}
	];
	Highcharts = Highcharts
	chartOptions = {
    	chart: {
	        zoomType: 'xy'
	    },
	    title: {
	        text: ''
	    },
	    
	    xAxis: [{
	        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	        crosshair: true
	    }],
	    yAxis: [{ // Primary yAxis
	        labels: {
	            format: '{value}',
	            style: {
	                color: "#3f8c99"
	            }
	        },
	        title: {
	            text: 'Total Locations',
	            style: {
	                color: "#3f8c99"
	            }
	        },
	        opposite: true

	    }, { // Secondary yAxis
	        gridLineWidth: 0,
	        title: {
	            text: 'Generation(tons)',
	            style: {
	                color: 'black'
	            }
	        },
	        labels: {
	            format: '{value}',
	            style: {
	                color: 'black'
	            }
	        }

	    }],
	    tooltip: {
	        shared: true
	    },plotOptions: {
	        column: {
	            stacking: 'normal',
	        }
    	},
	    legend: {
	        layout: 'horizontal',
	        align: 'center',
	        verticalAlign: 'bottom',
	        floating: false,
	        backgroundColor: '#FFFFFF'
	    },
	    series: [{
	        name: 'Waste',
	        type: 'column',
	        yAxis: 1,
   	        color: "#ff8820",
	        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
	        tooltip: {
	            valueSuffix: ' mm'
	        }

	    },{
	        name: 'OCC',
	        type: 'column',
	        yAxis: 1,
   	        color: "#88bb44",
	        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
	        tooltip: {
	            valueSuffix: ' mm'
	        }

	    },{
	        name: 'Recycling',
	        type: 'column',
	        yAxis: 1,
	        color: "#00b2dd",
	        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
	        tooltip: {
	            valueSuffix: ' mm'
	        }

	    }, {
	        name: 'Total',
	        showInLegend: false,               
	        type: 'line',
	        color: "#006677",
	        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
	        tooltip: {
	            valueSuffix: ' °C'
	        }
	    }]
   	};

}