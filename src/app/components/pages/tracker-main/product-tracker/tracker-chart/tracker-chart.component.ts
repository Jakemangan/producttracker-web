import {Component, Input, OnInit, ViewChild} from '@angular/core';
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

  @Input() priceDifference: number;
  private borderColor: string;
  private backgroundColor: string;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233],
      label: 'Series A',
      backgroundColor: "",

    },
  ];
  public lineChartLabels: Label[] = ['65', '233', '233', '233', '233', '233', '233', '233', '233', '233', '233'];
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
        radius: 2,
        hoverRadius: 4,
        pointStyle: 'circle',

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
          max: 15,
          min: -2,
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
  public lineChartColors: Color[] = [];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins: any = [];


  constructor() {
  }

  ngOnInit() {
    this.borderColor = 'rgb(82, 121, 193)'
    this.backgroundColor = 'rgba(216,231,255, 0.3)'
    // if(this.priceDifference < 0){
    //   this.borderColor = 'rgb(0,233,0)'
    //   this.backgroundColor = 'rgba(82,255,82,0.3)'
    // } else {
    //   this.borderColor = 'rgb(255,0,0)'
    //   this.backgroundColor = 'rgb(255,161,161)'
    // }

    this.lineChartColors[0] = {
      borderColor: this.borderColor,
      borderWidth: 3,
      backgroundColor: this.backgroundColor,
    }
  }

}
