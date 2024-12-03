import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private apiUrl = 'https://w9awwdcbhe.api.quickmocker.com/users';

    constructor(private http: HttpClient) { }

    fetchUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrl).pipe(
            catchError((error) => {
                console.error('Error fetching usuarios:', error);
                return of([]); // Devuelve un Observable con un array vacío en caso de error
            })
        );
    }

    private localUsuarios: Usuario[] = [
        {
            id: 1,
            nombre: 'Usuario 1',
            documentos: [
                { id: 1, nombre: 'Documento 1', fecha: '2023-01-01', verificado: false },
                { id: 2, nombre: 'Documento 2', fecha: '2023-02-01', verificado: false },
                { id: 6, nombre: 'Documento 6', fecha: '2023-06-01', verificado: false }
            ]
        },
        {
            id: 2,
            nombre: 'Usuario 2',
            documentos: [
                { id: 3, nombre: 'Documento 3', fecha: '2023-03-01', verificado: false },
                { id: 4, nombre: 'Documento 4', fecha: '2023-04-01', verificado: false },
                { id: 7, nombre: 'Documento 7', fecha: '2023-07-01', verificado: false }
            ]
        },
        {
            id: 3,
            nombre: 'Usuario 3',
            documentos: [
                { id: 5, nombre: 'Documento 5', fecha: '2023-05-01', verificado: false },
                { id: 8, nombre: 'Documento 8', fecha: '2023-08-01', verificado: false },
                { id: 9, nombre: 'Documento 9', fecha: '2023-09-01', verificado: false }
            ]
        }
    ];

    fetchLocalUsuarios(): Observable<Usuario[]> {
        return of(this.localUsuarios);
    }
}