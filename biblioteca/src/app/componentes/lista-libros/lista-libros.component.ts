import { Component } from '@angular/core';
import { BibliotecaService } from '../../servicios/biblioteca.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {
  libros: any[] = [];
  constructor(private bibliotecaService: BibliotecaService,  private router: Router) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.libros = this.bibliotecaService.obtenerLibros();
  }
  editarLibro(id: number): void {
    // Navegar a la ruta de edición pasando el ID del libro
    this.router.navigate(['/editar-libro', id]);
  }
}
