import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBaseApiService {
  public URL_SUBCATEGORIA :string = 'https://api-prod-wss.herokuapp.com/subcategorias'
  public URL_CATEGORIA :string = 'https://api-prod-wss.herokuapp.com/categorias/'
  public URL_PRODUTOS:string ='https://api-prod-wss.herokuapp.com/produtos'
  public URL_UPLOAD: string = 'https://api-prod-wss.herokuapp.com/upload'
  constructor() { }
}
