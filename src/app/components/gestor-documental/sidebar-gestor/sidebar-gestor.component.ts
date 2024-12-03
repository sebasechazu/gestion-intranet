import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidebar-gestor',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './sidebar-gestor.component.html',
  styleUrl: './sidebar-gestor.component.scss'
})
export class SidebarGestorComponent {

  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {

    this.items = [
      { label: 'Datos Personales', routerLink: '/gestor-documental/datos-personales' },
      { label: 'Datos Academicos', routerLink: '/gestor-documental/datos-academicos' },
      { label: 'Direccion Profesinal' },
      { label: 'Especialidades' },
      { label: 'Premios y Distinciones', },
      { label: 'Publicacion de datos' },
      { label: 'Aceptar y Enviar' },
      { label: 'Documentos', routerLink: '/gestor-documental/documentos' },
    ];
  }
}
