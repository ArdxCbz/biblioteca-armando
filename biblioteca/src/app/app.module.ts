import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarLibroComponent } from './componentes/agregar-libro/agregar-libro.component';
import { ListaLibrosComponent } from './componentes/lista-libros/lista-libros.component';
import { DetalleLibroComponent } from './componentes/detalle-libro/detalle-libro.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarLibroComponent } from './componentes/buscar-libro/buscar-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
import { EliminarLibroComponent } from './componentes/eliminar-libro/eliminar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarLibroComponent,
    ListaLibrosComponent,
    DetalleLibroComponent,
    HomeComponent,
    BuscarLibroComponent,
    EditarLibroComponent,
    EliminarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
