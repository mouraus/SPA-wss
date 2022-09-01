import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.scss']
})
export class PaginaProdutosComponent implements OnInit {

  public categorias : Array<String> = [ 
  'Alarmes',
  'Automatizadores',
  'CFTV',
  'Fechaduras',
  'Fonte',
  'Informatica',
  'Interfonia',
  'Fabricantes'
  ]

public patrocinadores: Array<String> = ['Megatron','Multilaser','FC', 'AGL']


  constructor() { }

  ngOnInit(): void {
  }

}
