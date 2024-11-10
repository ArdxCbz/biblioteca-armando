import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from '../../servicios/biblioteca.service';


@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrl: './editar-libro.component.css'
})
export class EditarLibroComponent implements OnInit {
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

  guardarCambios(): void {
    if (this.libro) {
      this.bibliotecaService.editarLibro(this.libro);
      this.router.navigate(['/home']);  // Redirige a la página de inicio (o donde quieras)
    }
  }
}