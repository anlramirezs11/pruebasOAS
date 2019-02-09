import { Component, OnInit } from '@angular/core';
import {ActividadService} from '../../services/actividad.service'
import { NgForm } from '@angular/forms';
import { Actividad } from 'src/app/models/actividad';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { from } from 'rxjs';
declare var M: any;

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  providers: [ActividadService]
})
export class ActividadesComponent implements OnInit {

  constructor(private actividadService: ActividadService) { }

  ngOnInit() {
    this.getActividades();
  }
  addActividad(form:NgForm){
    if(form.value._id){
      this.actividadService.putActividad(form.value)
      .subscribe(res => {
        this.resetForm(form);   
        M.toast({html:'Actividad Actualizada.'})
         this.getActividades();
      })
    }else{
      this.actividadService.postActividad(form.value)
      .subscribe(res => {
        this.resetForm(form);   
         M.toast({html:'Actividad Agregada.'})
         this.getActividades();
      })
    }    
  }
  getActividades(){
    this.actividadService.getActividades()
      .subscribe(res => {
        this.actividadService.actividades= res as Actividad[];
        console.log(res)
      }) 
  }
  editActividad(actividad: Actividad){
    this.actividadService.selectedActividad= actividad;
  }
  deleteActividad(actividad: Actividad){
    if(confirm('Estas seguro de eliminar la activiad '+actividad.descripcion+'?')){
      this.actividadService.deleteActividad(actividad._id)
      .subscribe(res=>{      
        this.getActividades();
        M.toast({html:'Actividad Eliminada.'})
      })
    }  
  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.actividadService.selectedActividad = new Actividad();
    }
  }


}
