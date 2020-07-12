import { Component, OnInit } from '@angular/core';
import { ApiArticleService } from 'src/app/services/api-article.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleModule } from '../article.module';
import { Article } from 'src/app/models/article';
import { type } from 'jquery';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html'

})
export class AjoutArticleComponent implements OnInit {
  addArticle:FormGroup; 
  
  listeajout: any = [];
  typestockagebox: string="choisir";
  naturebox: string="choisir";
  typebox: string="choisir";
  libellebox: string;
  
  codearticlebox: string;
  seuilbox: string;

  constructor(private service: ApiArticleService, private router: Router, private toastr: ToastrService,private fb: FormBuilder) { 
    let formControls={
      codearticle:new FormControl('', [Validators.required]),
      libelle:new FormControl('', [Validators.required]),
      unite:new FormControl('', [Validators.required]),
     
      nature:new FormControl('', [Validators.required]),
      type:new FormControl('', [Validators.required]),
      seuil:new FormControl('', [Validators.required]),
      typestockage:new FormControl('', [Validators.required]),
      description:new FormControl('',[Validators.nullValidator])
      



    }
    this.addArticle=this.fb.group(formControls); 

  }
  get codearticle(){return this.addArticle.get('codearticle')}
  get libelle(){return this.addArticle.get('libelle')}
  get unite(){return this.addArticle.get('unite')}
  get description(){return this.addArticle.get('description')}
  get nature(){return this.addArticle.get('nature')}
  get type(){return this.addArticle.get('type')}
  get seuil(){return this.addArticle.get('seuil')}
  get typestockage(){return this.addArticle.get('typestockage')}

  ngOnInit(): void {
    this.cleartxtbox();

  }


refresh() {
this.listeajout=[];
}


  creer() {
    let data=this.addArticle.value;
   let user = new Article(data.codearticle ,data.libelle,data.description,data.type,data.nature,data.typestockage,data.seuil, data.unite );
console.log(user) ;


      this.service.ajoutarticle(user).subscribe(data => {

        this.listeajout = data;

        console.log(data);


        if (data.RESPONSE == "0") {
          this.listeajout = [];
          this.toastr.error('article [' + this.codearticle + '] déjà existante');
        }
        else {
          this.toastr.success('article [' + this.codearticle + '] ajoutée avec success!!');
        }
        this.addArticle.reset();
      

      }, error => console.log(error));


    
   






  }



  supparticle(codearticle) {
    this.service.supprimerarticle(codearticle).subscribe(data => {
      console.log(data);
     this.refresh();
  },error => console.log(error));
}
  

cleartxtbox(){
 

  this.typebox="choisir";
 
  this.naturebox="choisir";
  
  this.typestockagebox="choisir";

}




retourliste(){

  this.router.navigate(["home/article/liste"]);


}

















}

















