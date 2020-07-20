import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
urlService="http://127.0.0.1/apis_pfe/utilisateur/";
  constructor(private http:HttpClient) { }


verifUser(login,pass){
  let body={login:login,pass:pass};
  return this.http.post(this.urlService+"login.php",body);
}

verifmail(mail){
  console.log (mail);
  return this.http.get(this.urlService+"exemple.php?mail="+mail);
}
verifphoto(iduser){
  return this.http.get(this.urlService+"verifphoto.php?iduser="+iduser);}
  
}
