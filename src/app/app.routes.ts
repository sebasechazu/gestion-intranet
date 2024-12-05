import { Routes } from '@angular/router';
import { GestorDocumentalComponent } from './components/gestor-documental/gestor-documental.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { DocumentosComponent } from './components/gestor-documental/documentos/documentos.component';
import { DatosPersonalesComponent } from './components/gestor-documental/datos-personales/datos-personales.component';
import { DatosAcademicosComponent } from './components/gestor-documental/datos-academicos/datos-academicos.component';

export const routes: Routes = [
    { path: 'certificados', component: CertificadosComponent },
    { path: '', redirectTo: 'gestor-documental', pathMatch: 'full' },
    {      
        path: 'gestor-documental', component: GestorDocumentalComponent,
        children: [
            { path: '', redirectTo: 'documentos', pathMatch: 'full' },
            { path: 'datos-personales', component: DatosPersonalesComponent },
            { path: 'datos-academicos', component: DatosAcademicosComponent },
            { path: 'documentos', component: DocumentosComponent }
        ]
    },

];
