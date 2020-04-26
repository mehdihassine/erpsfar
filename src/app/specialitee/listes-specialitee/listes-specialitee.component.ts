import { Component, OnInit } from '@angular/core';
import { SpecialiteeService } from 'src/app/services/specialitee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listes-specialitee',
  templateUrl: './listes-specialitee.component.html'
  
})
export class ListesSpecialiteeComponent implements OnInit {
  typebox: any ; 
  specialite:any[]; 
  libelle : any ; 
  selectedspecialiter: string;
  listespecialiter: any=[];
    
    constructor(private service:SpecialiteeService,private toastr: ToastrService, private router:Router) { }
  
    ngOnInit(): void {
      this.getlistedepot();
      this.refresh();
      
    }
    refresh(){
      this.service.getAllspecicaliter().subscribe(data=>{
        console.log(data); 
        
        if(data.RESPONSE){
          this.toastr.warning("liste spécialité vide !!!");
        }else
        {
      this.specialite=data ;
        
      this.typebox="choisir";
    }
      },error=> console.log (error));
    
    }
   delete(libelle){
      this.service.supprimerspecialiter(libelle).subscribe(data=>{
        console.log(data);
         this.toastr.success(data.RESPONSE);

         setTimeout(() => {this.refresh();},3000);

        
      },error=>console.log(error));
    } 
   
  
  
  
    rechspecialiter(){
  
      if(!this.libelle){
        this.toastr.warning('Champ recherche vide !!');
        this.refresh();
      }
  
  else{
      //kan el libelle categorie fareg  en9oulou 
      this.service.recherchespecialiter(this.libelle).subscribe(data => {
        console.log("recherche : "+this.libelle);
        this.specialite=[];
        this.specialite=(data);
        console.log(data);
    var responserecherche = data[0].respo;
    
    if(responserecherche === "erreurspecialiter"){
      this.toastr.error('specialiter ['+this.libelle+'] introuvable');
    
      this.refresh();
     
    }
    this.libelle="";
    
      }, error => console.log(error));
    }
  }
  
  affiche(){
    this.refresh();
  }
  
  
  
  
  
  nouveauspecialiter(){
  
    this.router.navigate(["home/specialitee/ajoute"]);
  
  
  }
  



  getlistedepot(){

    this.libelle="";
  
    this.service.getAllspecicaliter().subscribe(data => {
  if(data.RESPONSE){

  }else
      {
        this.listespecialiter = data;
  }
  
      //this.libelle = this.listedepot;
  
      console.log(this.listespecialiter);
  
      },error => console.log(error));
  
  
  
  
  }















}
