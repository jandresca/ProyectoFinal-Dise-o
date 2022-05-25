import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioDeEmpleados:FormGroup;

  constructor( public formulario: FormBuilder, 
               private crudService:CrudService,
               private ruteador: Router ) {
    this.formularioDeEmpleados = this.formulario.group({
      nombre:[''],
      correo:['']
    });
   }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log( "Hiciste click en agregar");
    console.log( this.formularioDeEmpleados.value );
  
  this.crudService.AgregarEmpleado( this.formularioDeEmpleados.value ).subscribe();
  this.ruteador.navigateByUrl( '/listar-empleado' );
  }
}
