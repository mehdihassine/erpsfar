import { Component, OnInit } from '@angular/core';
import { ApiCategorieService } from 'src/app/services/api-categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html'

})
export class ModifierComponent implements OnInit {
  libelle: any;
  categorie: any = [];
  idtype: any;
  description: any;

  constructor(private service: ApiCategorieService, private activateroute: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    this.libelle = this.activateroute.snapshot.paramMap.get("libelle");
  }

  








  ngOnInit(): void {
   
    this.getcategorie();
    
  }

  getcategorie() {

    this.service.getcategorie(this.libelle).subscribe(data => {
      this.categorie = data[0];

      this.description=this.categorie.description ; 
      
      console.log(JSON.stringify(this.categorie));
      console.log(this.categorie);
    }, error => console.log(error));
  }









  edit(idtype) {
    var reg = /^[A-Za-z]+$/;

    if (!this.libelle) {

      this.toastr.error('champ libelle obligatoire!!');
    }
    else if (this.libelle.match(reg)) {



      if (this.idtype) { this.categorie.idtype = this.idtype }
      if (this.libelle) { this.categorie.libelle = this.libelle }
      if (this.description) { this.categorie.description = this.description }


      this.service.editcategorie(this.categorie.idtype, this.categorie.libelle, this.categorie.description).subscribe(data => {
        this.libelle = this.categorie.libelle;
        this.description = this.categorie.description;
        console.log(data);

        this.categorie = data;
        // this.router.navigate(["categorie/all"]);
      }, error => console.log(error));
    }
    else {
      this.toastr.error('champ libelle obligatoirement chaine de caractére!!');
    }





  }





  retourliste() {

    this.router.navigate(["home/categorie/all"]);
  }
}

