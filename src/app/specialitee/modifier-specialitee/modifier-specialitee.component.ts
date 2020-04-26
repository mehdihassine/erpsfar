import { Component, OnInit } from '@angular/core';
import { SpecialiteeService } from 'src/app/services/specialitee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modifier-specialitee',
  templateUrl: './modifier-specialitee.component.html'
  
})
export class ModifierSpecialiteeComponent implements OnInit {
  specialite:any=[];
  libelle:any;
  salairej:any ;
  salairet:any;
libellebox:any;
descriptionbox:any; 
  idtype: any;
  salairej1:any;

  idspecialiter:any;
  constructor(private service:SpecialiteeService ,private activateroute: ActivatedRoute,private router:Router,private toastr: ToastrService,) { 
    this.libelle = this.activateroute.snapshot.paramMap.get("libelle");
  }

  ngOnInit(): void {
    this.getspecialiter();
  }

  getspecialiter() {
    this.salairj();
    this.service.getspecialite(this.libelle).subscribe(data => {
      this.specialite = data[0];

      this.idspecialiter=this.specialite.idspecialiter;
      this.libelle=this.specialite.libelle ; 
      this.salairet=this.specialite.salairetotale; 
      this.salairej=this.specialite.salairejour;
      console.log(JSON.stringify(this.specialite));
      console.log(this.specialite);

    this.specialite =[];
    }, error => console.log(error));
  }



  edit() {
    var reg = /^[A-Za-z]+$/;

    if (!this.libelle) {

      this.toastr.error('champ libelle obligatoire!!');
    }
    else if (this.libelle.match(reg)) {



      if (this.idspecialiter) { this.specialite.idspecialiter = this.idspecialiter }
      if (this.libelle) { this.specialite.libelle = this.libelle }
      if (this.salairet) { this.specialite.salairet = this.salairet }


      this.service.editspecialiter(this.specialite.idspecialiter, this.specialite.libelle, this.specialite.salairet,this.salairej).subscribe(data => {

        console.log(this.specialite.idspecialiter );

      this.libelle = this.specialite.libelle;
      this.salairet = this.specialite.salairet;
      this.salairej=this.specialite.salairej;
        console.log(data);
        if(data.RESPONSE){
this.toastr.warning(data.RESPONSE);
//toestr
        }
        else{

        this.specialite = data;
        this.toastr.success("modifier avec succes")
      }
        // this.router.navigate(["categorie/all"]);
      }, error => console.log(error));
    }
    else {
      this.toastr.error('champ libelle obligatoirement chaine de caractére!!');
    }





  }








  salairj(){

    this.salairej = (this.salairet/26).toFixed(2);

  //this.salairej = Math.round(this.salairej1).toFixed(2);
  
  }















  retourliste(){

    this.router.navigate(["home/specialitee/liste"]);
  
  
  }



}
