import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar-documentos',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-documentos.component.html',
  styleUrl: './sidebar-documentos.component.scss'
})
export class SidebarDocumentosComponent {

  items: MenuItem[] = [];

  constructor() { }

  

}
