import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar-gestor',
  standalone: true,
  imports: [PanelMenu],
  templateUrl: './sidebar-gestor.component.html',
  styleUrl: './sidebar-gestor.component.scss'
})
export class SidebarGestorComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {

    this.items = [
      { label: 'Certificados', icon: 'pi pi-file-o', routerLink: '/certificados' },
      { label: 'Registro de Entrada', icon: 'pi pi-comments' },
      { label: 'Registro de Salida', icon: 'pi pi-comments' },
      { label: 'Registro Salida', icon: 'pi pi-sign-out' },
      { label: 'Elecciones', icon: 'pi pi-calendar' },
      {
        label: 'Secretaria', icon: 'pi pi-user', items: [
          { label: 'Consultar', icon: 'pi pi-file' },
          { label: 'Alta', icon: 'pi pi-pencil' },
          { label: 'Modificar', icon: 'pi pi-refresh' }
        ]
      },

      { label: 'Gestor Documental', icon: 'pi pi-cloud', routerLink: '/gestor-documental' },

    ];
  }
}
