import { Component } from '@angular/core';
import { BibliotecaService } from '../../servicios/biblioteca.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrl: './agregar-libro.component.css'
})
export class AgregarLibroComponent {  nuevoLibro = { id: 0, titulo: '', autor: '', year: 0 };

constructor(private bibliotecaService: BibliotecaService) {}

onSubmit() {
  this.bibliotecaService.agregarLibro(this.nuevoLibro);
  this.nuevoLibro = { id: 0, titulo: '', autor: '', year: 0 }; // Resetear el formulario
}
}
