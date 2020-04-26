import { Component, OnInit } from '@angular/core';
import { ApiArticleService } from 'src/app/services/api-article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { exists } from 'fs';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html'
  
})
export class ModifierArticleComponent implements OnInit {

  codearticle: string;
  listearticle:any=[];
  
  libelle: any;
  description: any;
  type: any;
  nature: any;
  typestockage: any;
  seuil: any;

  typestockagebox: string;
  naturebox: string;
  typebox: string;
  libellebox: string;
  descriptionbox: string;
  codearticlebox: string;
  seuilbox: string;
  idarticle: any;
  listearticle2: any=[];
  constructor(private service:ApiArticleService , private activateroute: ActivatedRoute, private router: Router, private toastr: ToastrService) {
      this.idarticle = this.activateroute.snapshot.paramMap.get("id");
    }

  ngOnInit(): void {
    this.getarticles();
  }


  getarticles() {

    this.service.getarticle(this.idarticle).subscribe(data => {
      this.listearticle = [];
       this.listearticle = data[0];
       //this.listearticle2 = data;

      console.log(data);
      console.log(this.listearticle);


      this.codearticle=this.listearticle.codearticle ;
      this.libelle=this.listearticle.libellearticle ;
      this.description=this.listearticle.description ; 
      this.type=this.listearticle.typearticle ;
      this.nature=this.listearticle.nature ; 
      this.typestockage=this.listearticle.typestockage ;
      this.seuil=this.listearticle.seuilmin ; 
this.listearticle=this.listearticle[0];


      
    
    },error => console.log(error));

  }





  edit(idarticle) {
    this.listearticle=[];

    var reg = /^[0-9]+$/;
  
    if (!this.codearticle) {
      this.toastr.error('champ code article obligatoire!!');

    }
    
  
    else if (!this.libelle) {

      console.log('libelle :'+this.libelle);
      this.toastr.error('champ libelle obligatoire!!');
      this.getarticles();
    }
    else if (!this.seuil.match(reg)){
      this.toastr.error('champ seuil numerique!!');
      this.getarticles();
    }
    else{

      if (this.idarticle) { this.listearticle.idarticle = this.idarticle ;}
      if (this.codearticle) { this.listearticle.codearticle = this.codearticle; }
      if (this.libelle) { this.listearticle.libelle = this.libelle ;}
      if (this.description) { this.listearticle.description = this.description ;}
      if (this.type) { this.listearticle.type = this.type ;}
      if (this.nature) { this.listearticle.nature = this.nature ;}
      if (this.typestockage) { this.listearticle.typestockage = this.typestockage; }
      if (this.seuil) { this.listearticle.seuil = this.seuil ;}


    
    
      this.service.editarticle(this.listearticle.idarticle,this.listearticle.codearticle, this.listearticle.libelle, this.listearticle.description,
        this.listearticle.type,this.listearticle.nature, this.listearticle.typestockage,this.listearticle.seuil).subscribe(data => {
      
        console.log(data);

        this.listearticle=data;

        this.toastr.success('Article mis à jour avec success');
       // this.getarticles();

      
      }, error => console.log(error));
    
    


    }

  }

  


  retourliste() {

    this.router.navigate(["home/article/liste"]);
  }








}



