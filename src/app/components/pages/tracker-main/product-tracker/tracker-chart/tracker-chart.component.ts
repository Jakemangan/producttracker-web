import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType, ChartTooltipPositioner} from 'chart.js';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-tracker-chart',
  templateUrl: './tracker-chart.component.html',
  styleUrls: ['./tracker-chart.component.scss']
})
export class TrackerChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 65, 65, 43, 267, 22],
      label: 'Series A',
      backgroundColor: "",

    },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: "",
    showLines: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
      caretSize: 0,
      custom:function(tooltipModel: { x: number; y: number; }){

        //Top-Left
        tooltipModel.x=10;
        tooltipModel.y=0;

      }.bind(this)

    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 7
      },
      line: {

        borderWidth: 0
      }
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          display: true,
          tickMarkLength: 0,
          color: 'rgba(0,0,0,0.2)'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          display: true,
          tickMarkLength: 0,
          color: 'rgba(0,0,0,0.2)'
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(255,0,0,1.0)',
      borderWidth: 3,
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins: any = [];


  constructor() {
  }

  ngOnInit() {
  }

}
