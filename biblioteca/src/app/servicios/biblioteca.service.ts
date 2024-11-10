import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private librosKey = 'libros';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Obtener todos los libros
  obtenerLibros(): any[] {
    if (isPlatformBrowser(this.platformId)) {
      const librosJson = localStorage.getItem(this.librosKey);
      return librosJson ? JSON.parse(librosJson) : [];
    }
    return [];
  }

  // Agregar un nuevo libro
  agregarLibro(libro: { id: number; titulo: string; autor: string; year: number }) {
    if (isPlatformBrowser(this.platformId)) {
      const libros = this.obtenerLibros();
      
      // Generar ID único para el nuevo libro
      libro.id = libros.length > 0 ? libros[libros.length - 1].id + 1 : 1;
      
      // Agregar el nuevo libro al array y actualizar LocalStorage
      libros.push(libro);
      localStorage.setItem(this.librosKey, JSON.stringify(libros));
    }
  }

  // Editar un libro existente
  editarLibro(libro: { id: number; titulo: string; autor: string; year: number }) {
    if (isPlatformBrowser(this.platformId)) {
      const libros = this.obtenerLibros();
      const index = libros.findIndex(l => l.id === libro.id);
      if (index !== -1) {
        libros[index] = libro;  // Actualizar el libro en el arreglo
        localStorage.setItem(this.librosKey, JSON.stringify(libros));  // Guardar de nuevo en localStorage
      }
    }
  }
  // Eliminar un libro
eliminarLibro(id: number): void {
  if (isPlatformBrowser(this.platformId)) {
    let libros = this.obtenerLibros();
    // Filtramos los libros para eliminar el que coincide con el id
    libros = libros.filter(libro => libro.id !== id);
    // Actualizamos el LocalStorage con la nueva lista
    localStorage.setItem(this.librosKey, JSON.stringify(libros));
  }
}
  
}