import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarGestorComponent } from './sidebar-gestor/sidebar-gestor.component';

@Component({
  selector: 'app-gestor-documental',
  standalone: true,
  imports: [RouterOutlet,SidebarGestorComponent],
  templateUrl: './gestor-documental.component.html',
  styleUrl: './gestor-documental.component.scss'
})
export class GestorDocumentalComponent {

  constructor() { }

 
}
