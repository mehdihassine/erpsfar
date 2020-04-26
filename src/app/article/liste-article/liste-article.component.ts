import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiArticleService } from 'src/app/services/api-article.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html'

})
export class ListeArticleComponent implements OnInit {
  listeajout:any=[];
  codearticle: any;




  constructor(private service:ApiArticleService,private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    
    this.refresh();
    
  }
  refresh(){
    this.service.getAllarticle().subscribe(data=>{
      console.log(data); 
    this.listeajout=data ; 
    },error=> console.log (error));
    
  }



 delete(codearticle){
    this.service.supprimerarticle(codearticle).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  } 
 



  recherchearticle(){

    if(!this.codearticle){
      this.toastr.warning('Champ recherche vide !!');
      this.refresh();
    }

else{
    //kan el codearticle listeajout fareg  en9oulou 
    this.service.recharticle(this.codearticle).subscribe(data => {
      console.log("recherche : "+this.codearticle);
      this.listeajout=[];
      this.listeajout=(data);
      console.log(data);
  var responserecherche = data[0].respo;
  
  if(responserecherche === "erreurarticle"){
    this.toastr.error('article ['+this.codearticle+'] introuvable');
  
    this.refresh();
    console.log("retour liste");
  }
  this.codearticle="";
  
    }, error => console.log(error));
  }
}

afficheliste(){
  this.refresh();
}





ajouterarticle(){

  this.router.navigate(["home/article/ajout"]);


}


}
