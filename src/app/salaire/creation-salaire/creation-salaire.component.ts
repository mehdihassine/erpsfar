import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-creation-salaire',
  templateUrl: './creation-salaire.component.html',
  styleUrls: ['./creation-salaire.component.css']
})
export class CreationSalaireComponent implements OnInit {
  datefiche: string;
  datefiche1: string;
  years: any;
  matricule:any;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    var date = new Date();
    this.datefiche=this.datePipe.transform(date,"ddMMyyyy");
    this.datefiche1=this.datePipe.transform(date,"dd/MM/yyyy");
this.years =date.getFullYear();
   
  }
// getmatricule(){
//   this.service.getmat(this.matricule)

// }





 
}
