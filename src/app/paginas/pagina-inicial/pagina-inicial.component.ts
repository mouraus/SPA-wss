import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { ProdutosModel } from '../pagina-produtos/pagina-produtos.model';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {

  public destaqueProdutos: ProdutosModel[] = [];


  public parceiros: {img:string,nome:string, descricao: string}[] =[
    {
      img: '../../../assets/patrocinadores/fc-patrocinador.jpeg',
      nome:"Fc Fontes",
      descricao: 'A FC Fontes foi constituída para buscar e oferecer soluções para o dia-a-dia do instalador, como fonte de alimentação, balun de vídeo, conectores, cabos HDMI, caixas organizadoras e de proteção, e Nobreaks - fundamentais nos projetos de Segurança Eletrônica.'
    },
    {
      img: '../../../assets/patrocinadores/patrocinador-AGL-logo.webp',
      nome:"AGL Soluções em Segurança Eletrônica",
      
      descricao: 'Fundada há 37 anos, a AGL sempre buscou a excelência em seus negócios, sendo referência de idoneidade, qualidade de produtos, compromisso com os clientes e parceiros.'
    },
    {
      img: '../../../assets/patrocinadores/giga_logo_header.png',
      nome:"Giga Multilaser",
      descricao: 'Criada há mais de 10 anos, a Giga Security, que em 2021 passou a se posicionar no mercado como Multilaser Giga, é considerada uma das principais marcas do mercado brasileiro no segmento de segurança eletrônica.'
    },
    {
      img: '../../../assets/patrocinadores/logo_megatron.png',
      nome:"Megatron Fios e Cabos",
      descricao: 'Totalmente consolidada no segmento e com foco absoluto, é referência nacional  no mercado de Fios e Cabos Especiais.'
    }
  ]
 
  public patrocinadores: Array<string> = ['../../../assets/patrocinadores/fc-patrocinador.jpeg', '../../../assets/patrocinadores/giga_logo_header.png', '../../../assets/patrocinadores/logo_megatron.png', '../../../assets/patrocinadores/patrocinador-AGL-logo.webp']
  public categorias: Array<{ titulo: string, img: string }> = [
    {
      titulo: 'cameras',
      img: '../../../assets/categorias/camera.PNG'
    }, {
      titulo: 'fechaduras',
      img: '../../../assets/categorias/fechadura.png'
    }, {
      titulo: 'sensores',
      img: '../../../assets/categorias/sensor.png'
    }, {
      titulo: 'interfones',
      img: '../../../assets/categorias/interfone.png'
    },
  ];
  
  constructor(
    private produtosService:ProdutosService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(
      (data: ProdutosModel[]) => {
        this.destaqueProdutos = data.slice(0, 6);
      }
    )

    console.log(this.destaqueProdutos)
  }

  public linkPaginaProduto(produtoId: number){
    this.router.navigateByUrl("produto?id=" + produtoId);
  }

}
