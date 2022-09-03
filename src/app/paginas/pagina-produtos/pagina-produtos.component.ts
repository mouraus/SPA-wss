import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.scss']
})
export class PaginaProdutosComponent implements OnInit {

  public categorias : Array<String> = []

  public patrocinadores: Array<String> = ['Megatron','Multilaser','FC', 'AGL']

  public produtos: Object = []
  
  constructor(
    private produtosService:ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(
      (data) => {
        this.produtos = data
        console.log(this.produtos)

      },
      (error) =>{
        console.log(error)
      }
    )
  }

}
