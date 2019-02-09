import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Actividad } from '../models/actividad';
import { ActividadesComponent} from '../components/actividades/actividades.component';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  selectedActividad: Actividad;
  actividades: Actividad[];
  readonly URL_API= 'http://localhost:3000/api/actividades';
  constructor(private http:HttpClient) {
    this.selectedActividad= new Actividad;
  }

  getActividades(){
    return this.http.get(this.URL_API);
  }

  postActividad(Actividad: Actividad){
    return this.http.post(this.URL_API, Actividad);
  }

  putActividad(actividad: Actividad){
    return this.http.put(this.URL_API+`/${actividad._id}`, actividad);
  }

  deleteActividad(_id:string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }



}
