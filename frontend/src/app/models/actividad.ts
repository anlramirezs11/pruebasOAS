export class Actividad {
  constructor( _id='', descripcion='', f_registro='', f_limite='', 
    responsable='', soporte='' , estado='' ){
    this._id=_id;
    this.descripcion=descripcion;
    this.estado=estado;
    this.f_limite=f_limite;
    this.f_registro=f_registro;
    this.responsable=responsable;
    this.soporte=soporte;
  }
  
  _id: string;
  descripcion: string;
  f_registro: string;
  f_limite: string;
  responsable: string;
  soporte: string;
  estado: string;
}
