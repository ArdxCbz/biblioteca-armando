import { Component } from '@angular/core';
import { BibliotecaService } from '../../servicios/biblioteca.service';

@Component({
  selector: 'app-buscar-libro',
  templateUrl: './buscar-libro.component.html',
  styleUrl: './buscar-libro.component.css'
})
export class BuscarLibroComponent {
  libros: any[] = [];
  librosFiltrados: any[] = [];
  criterioBusqueda: string = '';

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit() {
    // Obtener los libros desde el servicio
    this.libros = this.bibliotecaService.obtenerLibros();
    this.librosFiltrados = this.libros; // Mostrar todos los libros inicialmente
  }

  buscarLibros() {
    // Filtrar los libros según el criterio de búsqueda
    this.librosFiltrados = this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(this.criterioBusqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(this.criterioBusqueda.toLowerCase()) ||
      libro.year.toString().includes(this.criterioBusqueda)
    );
  }
}