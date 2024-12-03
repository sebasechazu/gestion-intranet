import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { SidebarDocumentosComponent } from "./sidebar-documentos/sidebar-documentos.component";
import { UsuarioService } from "../../../services/usuario.service";
import { Usuario } from "../../../models/usuario.model";

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [TableModule, SidebarDocumentosComponent, FormsModule, Select],
  providers: [UsuarioService],
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioOptions: { label: string, value: Usuario }[] = [];
  usuarioSelected: Usuario | undefined;
  loading: boolean = false;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.fetchLocalUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
        console.log('Usuarios:', this.usuarios);
      },
      (error) => {
        console.error('Error fetching usuarios:', error);
      }
    );

  }

  ngOnInit(): void {
    this.usuarioService.fetchLocalUsuarios().subscribe(
      (usuarios) => {
        if (usuarios && Array.isArray(usuarios)) {
          this.usuarios = usuarios;
          this.usuarioOptions = this.usuarios.map(usuario => ({ label: usuario.nombre, value: usuario }));
          console.log('Usuario options:', this.usuarioOptions);
        } else {
          console.error('Fetched usuarios is not an array:', usuarios);
        }
      },
      (error) => {
        console.error('Error fetching usuarios:', error);
      }
    );
    

  }

  onUsuarioChange(event: any) {
    this.usuarioSelected = event.value;
    console.log('Usuario changed:', event);
  }

}
