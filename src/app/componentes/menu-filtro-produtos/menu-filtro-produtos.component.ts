import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-filtro-produtos',
  templateUrl: './menu-filtro-produtos.component.html',
  styleUrls: ['./menu-filtro-produtos.component.scss']
})
export class MenuFiltroProdutosComponent implements OnInit {

  public categorias : Array<{categoria:string}> = [
    {categoria:'Alarmes'},
    {categoria:'Automatizadores'},
    {categoria:'CFTV'},
    {categoria:'Fechaduras'},
    {categoria:'Fontes'},
    {categoria:'Informatica'},
    {categoria:'Interfonia'}
    ]
  public patrocinadores: Array<String> = ['Megatron','Multilaser','FC', 'AGL']


  constructor() { }

  ngOnInit(): void {
  }

}
