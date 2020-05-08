import { Component, OnInit } from '@angular/core';
import { ApiProduitService } from 'src/app/services/api-produit.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html'

})
export class ListProduitComponent implements OnInit {
 
  typebox: any ; 
 
  nom : any ; 
  type: any ; 
 
  listescategorie: any=[];
  
 
produit :any=[];
  idProduit: any;

  constructor(private service:ApiProduitService, private router: Router,private toastr :ToastrService ) { }

  ngOnInit(): void {
    this.getcategorie();
    this.refresh();
    
  }
  getcategorie(){
    this.type="";
    this.service.getAllgategorie().subscribe(data => {
  if(data.RESPONSE){
  this.toastr.warning("liste specialiter vide !! "); 
  }else
      {
        this.listescategorie = data;
        this.typebox="choisir";
  }  
      console.log(this.listescategorie);
      },error => console.log(error));
  }
  



  refresh(){
    this.service.getAllproduit().subscribe(data=>{
      console.log(data); 
   
    if(data.RESPONSE){
      this.toastr.warning("liste employee vide !!!");
    }else
    {
      this.produit=data ; 
    
        }
        this. cleartxtbox();
    },error=> console.log (error));
    
  }
  delete(idProduit){
    console.log(idProduit);
    this.service.deleteproduit(idProduit).subscribe(data=>{
      console.log(data);
      this.toastr.success(data.RESPONSE);
      this.refresh();
    },error=>console.log(error));
  }
  
  cleartxtbox(){
    this.typebox="categorie";
    this.type="";
    
    this.nom="";
    }

    affiche(){
      this.refresh();
      }

      nouveauproduit(){

        this.router.navigate(["home/produit/add"]);
      }
  Recherche(){
        if((!this.nom)&&(!this.type)){
        this.toastr.warning('Champ recherche vide !!');
        this.refresh();
        
        }
        
        else if((!this.type)&&(this.nom)){
        //servvicce rech avec nom produit
        
        this.service.rechnom(this.nom).subscribe(data=>{
        console.log(data);
        if (data.RESPONSE){
        this.toastr.warning(data.RESPONSE);
        }else{
        this.produit=data; 
        }
        
        },error=>console.log(error));
        
        }
        
        
        else if((this.type)&&(!this.nom)){
        //service  categorie
        this.service.rechtype(this.type).subscribe(data=>{
        console.log(data);
        if (data.RESPONSE){
          this.toastr.warning(data.RESPONSE);
          this.produit=[];
        }else{
          this.produit=data; 
        }
        
        },error=>console.log(error));
        
        }
  
        
        this.cleartxtbox();
        
        }
      
         
  

 
 
 
 
 
 
      
}




/*


























*/