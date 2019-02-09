export class Responsable {
  constructor( _id='', nombre='', correo='', telefono=0){
    this._id=_id;
    this.nombre=nombre;
    this.correo=correo;
    this.telefono=telefono;
  }
  
  _id: string;
  nombre: string;
  correo: string;
  telefono: number;
}