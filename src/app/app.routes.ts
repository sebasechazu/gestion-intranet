import { Routes } from '@angular/router';
import { GestorDocumentalComponent } from './components/gestor-documental/gestor-documental.component';
import { CertificadosComponent } from './components/certificados/certificados.component';

export const routes: Routes = [
    { path: 'certificados', component: CertificadosComponent },
    { path: 'gestor-documental', component: GestorDocumentalComponent }
];
