  import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProdutosModel } from '../paginas/pagina-produtos/pagina-produtos.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private BASE_URL :string = "https://wss-dev.herokuapp.com";

  private HTTP_HEADER_NO_AUTH: HttpHeaders = new HttpHeaders({
    'content-type':'application/json'
  })

  attFiltros: Subject<any> = new Subject<any>();

  public categoriasSelecionadas: any[] = [];
  public parametroBusca: string = '';
  public produtosFiltrados: ProdutosModel[] = [];
  

  constructor(private http :HttpClient, private router: Router) { }

  public getProdutos(){
    return this.http.get<ProdutosModel[]>(`${this.BASE_URL}/produtos`,{ headers: this.HTTP_HEADER_NO_AUTH })
  }

  public getCategorias(){
    return this.http.get<any>(`${this.BASE_URL}/categorias`,{ headers: this.HTTP_HEADER_NO_AUTH })
  }

  public postBuscarProdutos(parametroBusca: string){
    var jsonData: {termo: string} = {termo: parametroBusca};

    return this.http.post<ProdutosModel[]>(`${this.BASE_URL}/produtos/buscarHeader`,JSON.stringify(jsonData),{ headers: this.HTTP_HEADER_NO_AUTH })
  }

  private filtroPorCategoria(inputCategorias: any[]){
    var filtroUrl: any[] = [];
    for (let item of inputCategorias){
      filtroUrl.push(`id_categoria=${item}`);
    }
    return this.http.get<any>(`${this.BASE_URL}/produtos/filtrar?${filtroUrl.join('&')}`,{ headers: this.HTTP_HEADER_NO_AUTH })
  }


  public setFiltros(inputFiltros: number[]){
    this.categoriasSelecionadas = inputFiltros
    this.filtrarCategoriaBusca();
  }

  public setParametroBusca(parametroBusca: string){
    this.parametroBusca = parametroBusca;
    this.filtrarCategoriaBusca();
  }

  public filtrarCategoriaBusca(){
    if(this.parametroBusca){
      this.postBuscarProdutos(this.parametroBusca).subscribe(
        (resBusca: any[]) => {
          console.log(resBusca, this.parametroBusca)
          this.produtosFiltrados = resBusca;
          this.attFiltros.next(this.produtosFiltrados)
        }
      )
      this.parametroBusca = '';
    }
    
    else if(this.categoriasSelecionadas.length > 0){
      this.filtroPorCategoria(this.categoriasSelecionadas).subscribe(
        (resBusca: any[]) => {
          console.log(resBusca)
  
         for(let produto of resBusca){
          this.produtosFiltrados.push(produto)
         }
         console.log(this.produtosFiltrados, 'CATEGORIA')
         this.attFiltros.next(this.produtosFiltrados)

        }
      )
    } 

    else{
      this.getProdutos().subscribe(
        (data) => {
        this.produtosFiltrados = data
        console.log(this.produtosFiltrados, 'SEM FILTRO')
        this.attFiltros.next(this.produtosFiltrados)
        }
      )
    }
   this.produtosFiltrados = [];
  }

  public getListaProdutosFiltrados(): any{
    this.filtrarCategoriaBusca();
    return this.produtosFiltrados;
  }

  public getProdutoEspecifico(id: number){
    return this.http.get<ProdutosModel>(`${this.BASE_URL}/produtos/detalhar/${id}`,{ headers: this.HTTP_HEADER_NO_AUTH })
  }

  public getParametroBusca(){
    return this.parametroBusca;
  }

  public getCategoriasSelecionadas(){
    return this.categoriasSelecionadas;
  }

}