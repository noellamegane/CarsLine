import { Annonce } from "src/app/read-voiture/models/annonce";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Voiture } from "../models/voiture";
import { Image } from "../models/image";
import { Utilisateur } from "src/app/authentification/models/utilisateurs";

@Injectable()
export class AfficheVoitureService{

    constructor(private http : HttpClient){}
  

   getAnnoces(): Observable<Annonce[]>
    {
       return this.http.get<Annonce[]>('http://localhost:3000/api/findall/annonce');
    }
    getVoitures(): Observable<Voiture[]>
    {
       return this.http.get<Voiture[]>('http://localhost:3000/api/findall/voiture');
    }
    getAnnonceById(id : number): Observable<Annonce>
    {
       return this.http.get<Annonce>(`http://localhost:3000/api/annonce/${id}`);
    }
    getAllImageById(id : number):Observable<Image[]>
    {
      return this.http.get<Image[]>(`http://localhost:3000/api/findbypk/image_imagesuploads/${id}`);
    }
    getAllUsers():Observable<Utilisateur[]>
    {
      return this.http.get<Utilisateur[]>('http://localhost:3000/api/findall/utilisateur');
    }

}