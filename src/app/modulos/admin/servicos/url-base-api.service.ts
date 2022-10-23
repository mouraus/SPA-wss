import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBaseApiService {
  public URL_SUBCATEGORIA :string = 'https://wss-dev.herokuapp.com/subcategorias'
  public URL_CATEGORIA :string = 'https://wss-dev.herokuapp.com/categorias/'
  public URL_PRODUTOS:string ='https://wss-dev.herokuapp.com/produtos'
  public URL_UPLOAD: string = 'https://wss-dev.herokuapp.com/upload'
  constructor() { }
}
