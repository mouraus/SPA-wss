import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public categoriasLista: {id: number, nome_categoria: string}[] = [];
  public redesSociais: Array<{img:string, url:string}> = [
    {img:'../../../assets/icones/instagram.svg', url:'https://instagram.com/wssdistribuidora?igshid=YmMyMTA2M2Y='},
    {img:'../../../assets/icones/whatsapp.svg', url:'http://api.whatsapp.com/send?1=pt_BR&phone=553184848326'}
  ]

  constructor(
    private router: Router,
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtosService.getCategorias().subscribe(
      (data: any) => {
        this.categoriasLista = data
        this.organizarCategorias();
      }
    )
  }

  private organizarCategorias(){
    console.log(this.categoriasLista)
    this.categoriasLista = this.categoriasLista.slice(0, 6);
  }

  public redirecionarCategoria(idCategoria:number){
    this.produtosService.setFiltros([idCategoria]);
    this.router.navigateByUrl(`/produtos`);
  }
}