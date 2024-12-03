export interface Documento {
  id: number;
  nombre: string;
  fecha: string;
  verificado: boolean;
}

export interface Usuario {
  id: number;           
  nombre: string;       
  documentos: Documento[];  
}
