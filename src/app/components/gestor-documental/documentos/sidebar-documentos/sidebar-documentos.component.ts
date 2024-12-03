import { Component, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-sidebar-documentos',
  standalone: true,
  imports: [PanelMenu],
  templateUrl: './sidebar-documentos.component.html',
  styleUrl: './sidebar-documentos.component.scss'
})
export class SidebarDocumentosComponent {

  items: MenuItem[] = [];

  user = input<Usuario>();

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Colegiado', items: [
          {
            label: 'Datos Personales', items: [
              { label: 'Datos Bancarios' },
              { label: 'Direcciones' },
              { label: 'Cargos' },
              { label: 'Premios' },
              { label: 'Ficha CSCAE' },
              { label: 'Red de Arquitectos' },

            ]
          },
          {
            label: 'Datos Colegiales', items: [
              { label: 'Situación colegial' },
              { label: 'Bonificaciones' },
              { label: 'Sanciones' }
            ]
          }

        ]
      },
    ];
  }
}
