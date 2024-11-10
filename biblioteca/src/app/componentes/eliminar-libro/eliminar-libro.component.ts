import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from '../../servicios/biblioteca.service';

@Component({
  selector: 'app-eliminar-libro',
  templateUrl: './eliminar-libro.component.html',
  styleUrl: './eliminar-libro.component.css'
})
export class EliminarLibroComponent implements OnInit{
  libroId: number | null = null;
  libro: { id: number; titulo: string; autor: string; year: number } | undefined;

  constructor(
    private bibliotecaService: BibliotecaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del libro desde los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      this.libroId = +params.get('id')!;
      this.obtenerLibro();
    });
  }

  obtenerLibro(): void {
    const libros = this.bibliotecaService.obtenerLibros();
    this.libro = libros.find(libro => libro.id === this.libroId);
  }

  eliminarLibro(): void {
    if (this.libroId !== null) {
      this.bibliotecaService.eliminarLibro(this.libroId); // Llamar al servicio para eliminar el libro
      this.router.navigate(['/lista-libros']);  // Redirige a la lista de libros después de eliminar
    }
  }

  cancelarEliminacion(): void {
    this.router.navigate(['/lista-libros']);  // Redirige a la lista sin eliminar
  }
}