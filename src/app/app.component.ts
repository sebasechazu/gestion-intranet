import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { ButtonIcon } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { Menu, MenuItemContent } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, SidebarComponent,Menubar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  items: MenuItem[] | undefined;
  title = 'app';

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-inbox',
        styleClass: 'profile-icon'
      },
      {
        
        icon: 'pi pi-bell'
      },
      {
        icon: 'pi pi-user',
        items: [
          {
            label: 'Editar Perfil',
            icon: 'pi pi-user-edit',
            
          },
          {
            label: 'Datos',
            icon: 'pi pi-server'
          },
          {
            label: 'Salir',
            icon: 'pi-sign-out'
          },
          
        ]
      },
      
    ]
  }
}
