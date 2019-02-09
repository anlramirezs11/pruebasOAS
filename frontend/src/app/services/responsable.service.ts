import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Responsable } from '../models/responsable';
import { ResponsablesComponent} from '../components/responsables/responsables.component';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  selectedResponsable: Responsable;
  responsables: Responsable[];
  readonly URL_API= 'http://localhost:3000/api/responsables';
  constructor(private http:HttpClient) {
    this.selectedResponsable= new Responsable();
  }

  getResponsables(){
    return this.http.get(this.URL_API);
  }

  postResponsable(Responsable: Responsable){
    return this.http.post(this.URL_API, Responsable);
  }

  putResponsable(responsable: Responsable){
    return this.http.put(this.URL_API+`/${responsable._id}`, responsable);
  }

  deleteResponsable(_id:string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }



}
