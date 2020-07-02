import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { VenteService } from 'src/app/services/vente.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  dataS= new Array(); 
  days= new Array();
  constructor(private service:VenteService) { }

  ngOnInit(): void {
    this.service.getStatVente().subscribe(dataE=>{
      for(let i=0; i<dataE.length; i++){
        console.log("ressss : "+dataE[i].montanttotal);
        this.dataS.push(dataE[i].montanttotal);
        this.days.push(dataE[i].day);
      }
      
      console.log("contenue of DATA  : "+this.dataS);
      console.log("contenue of DATA  : "+this.days);
    }, error=>{
      console.log("Erreur");
    })
  }

  lineChartData: ChartDataSets[] = [
    { data: this.dataS, label: 'Statestique vente ' },
  ];

  lineChartLabels: Label[] = this.days;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  

}
