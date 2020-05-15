import { Component, OnInit } from '@angular/core';
import { ApiArticleService } from 'src/app/services/api-article.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html'

})
export class AjoutArticleComponent implements OnInit {
  codearticle: any;
  libelle: any;
  description: any;
  type: any;
  nature: any;
  typestockage: any;
  seuil: any;
  listeajout: any = [];
  typestockagebox: string;
  naturebox: string;
  typebox: string;
  libellebox: string;
  descriptionbox: string;
  codearticlebox: string;
  seuilbox: string;
  unite:any;
  constructor(private service: ApiArticleService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cleartxtbox();
  }


refresh() {
this.listeajout=[];
}


  creer() {

    var reg = /^[0-9]+$/;


    if (!this.codearticle) {
      this.toastr.error('champ code article  obligatoire!!');
    }

    else if (!this.libelle) {
      this.toastr.error('champ libelle obligatoire!!');
    }
    else if (!this.unite) {
      this.toastr.error('champ unite obligatoire!!');
    }
    else if (!this.type) {
      this.toastr.error('champ type article obligatoire!!');
    }

    else if (!this.nature) {
      this.toastr.error('champ nature article obligatoire!!');
    }

    else if (!this.typestockage) {
      this.typestockage = 'normal';
    }
    else if (!this.seuil.match(reg)) {
      this.toastr.error('champ seuil numerique!!');
    }


    else {

      this.service.ajoutarticle(this.codearticle, this.libelle, this.description, this.type, this.nature, this.typestockage, this.seuil,this.unite).subscribe(data => {

        this.listeajout = data;

        console.log(data);


        if (data.RESPONSE == "0") {
          this.listeajout = [];
          this.toastr.error('article [' + this.codearticle + '] déjà existante');
        }
        else {
          this.toastr.success('article [' + this.codearticle + '] ajoutée avec success!!');
        }

        this.cleartxtbox();

      }, error => console.log(error));



    }

   






  }



  supparticle(codearticle) {
    this.service.supprimerarticle(codearticle).subscribe(data => {
      console.log(data);
     this.refresh();
  },error => console.log(error));
}
  

cleartxtbox(){
  this.codearticle="";
  this.codearticlebox="";
  this.description="";
  this.descriptionbox="";
  this.libelle="";
  this.libellebox="";
  this.type="";
  this.typebox="choisir";
  this.nature="";
  this.naturebox="choisir";
  this.typestockage="";
  this.typestockagebox="choisir";
  this.seuil="";
  this.seuilbox="";
}




retourliste(){

  this.router.navigate(["home/article/liste"]);


}

















}

















