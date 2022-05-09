import { Component } from "@angular/core";


@Component({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'

})
export class HeroeComponent {

   nombre: string = 'Iroman';
   edad: number = 45;

   get nombrecapitalizado(): string{

    return this.nombre.toUpperCase();    
   }

   //    se construyen templates de un string, se puede hacer de las dos formas    
   obtenernombre():string{

    return `${ this.nombre} - ${this.edad} `;
    // return this.nombre + '-' + this.edad;

   }

   CambiarNombre():void {

    this.nombre = 'Spiderman';
   }
   CambiarEdad():void {

    this.edad = 30;
   }

}