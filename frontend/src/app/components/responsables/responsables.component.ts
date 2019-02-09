import { Component, OnInit } from '@angular/core';
import {ResponsableService} from '../../services/responsable.service'
import { NgForm } from '@angular/forms';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { from } from 'rxjs';
import { Responsable } from 'src/app/models/responsable';

declare var M: any;

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css'],
  providers: [ResponsableService]
})
export class ResponsablesComponent implements OnInit {

  constructor(private responsableService: ResponsableService) { }

  ngOnInit() {
    this.getResponsables();
  }
  addResponsable(form:NgForm){
    if(form.value._id){
      this.responsableService.putResponsable(form.value)
      .subscribe(res => {
        this.resetForm(form);   
        M.toast({html:'Responsable Actualizado.'})
         this.getResponsables();
      })
    }
    else{
      this.responsableService.postResponsable(form.value)
      .subscribe(res => {
        this.resetForm(form);   
         M.toast({html:'Responsable Agregado.'})
         this.getResponsables();
      })
    }}
    deleteResponsable(responsable: Responsable){
      if(confirm('Estas seguro de eliminar el responsable '+responsable.nombre+'?')){
        this.responsableService.deleteResponsable(responsable._id)
        .subscribe(res=>{      
          this.getResponsables();
          M.toast({html:'Responsable Eliminado.'})
        })
      }  
    }
  
    editResponsable(responsable: Responsable){
      this.responsableService.selectedResponsable= responsable;
    }
    
  
getResponsables(){
      this.responsableService.getResponsables()
        .subscribe(res => {
          this.responsableService.responsables= res as Responsable[];
          console.log(res)
        }) 
    }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.responsableService.selectedResponsable= new Responsable();
    }
  }

}
