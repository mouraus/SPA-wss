import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/servicos/produtos.service';


@Component({
  selector: 'app-menu-filtro-produtos',
  templateUrl: './menu-filtro-produtos.component.html',
  styleUrls: ['./menu-filtro-produtos.component.scss']
})
export class MenuFiltroProdutosComponent implements OnInit {


  public categoriasLista: any = []
  public selecaoFiltroCategoria: number[] = [];
  public filtrosSelecionados: number[]  = []

  constructor(
    private produtosService:ProdutosService,
    private activatedRoute: ActivatedRoute,
  ) {
   }



  ngOnInit(): void {
    this.produtosService.getCategorias().subscribe(
      (data: any) => {
        this.categoriasLista = data
      }
    )
    this.getCategoriasSelecionadas();
  }

  setFiltros() {
    this.produtosService.setFiltros(this.filtrosSelecionados)
  }

  onFilterChange(event: any){
    if(event.target.checked){
      this.filtrosSelecionados.push(event.target.id)
      this.setFiltros() ;
    }
    else{
      this.filtrosSelecionados.splice(this.filtrosSelecionados.indexOf(event.target.id), 1)
      this.setFiltros() ;
    }
 }

 getCategoriasSelecionadas(){
  this.selecaoFiltroCategoria = this.produtosService.getCategoriasSelecionadas();
 }
}
