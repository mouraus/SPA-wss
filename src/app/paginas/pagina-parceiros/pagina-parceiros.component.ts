import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-parceiros',
  templateUrl: './pagina-parceiros.component.html',
  styleUrls: ['./pagina-parceiros.component.scss']
})
export class PaginaParceirosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public parceiros: {img:string, descricao: string}[] =[
    {
      img: '../../../assets/patrocinadores/patrocinador-AGL-logo.webp',
      descricao: 'Fundada há 37 anos, a AGL sempre buscou a excelência em seus negócios, sendo referência de idoneidade, qualidade de produtos, compromisso com os clientes e parceiros.'
    },
    {
      img: '../../../assets/patrocinadores/giga_logo_header.png',
      descricao: 'Criada há mais de 10 anos, a Giga Security, que em 2021 passou a se posicionar no mercado como Multilaser Giga, é considerada uma das principais marcas do mercado brasileiro no segmento de segurança eletrônica.'
    },
    {
      img: '../../../assets/patrocinadores/fc-patrocinador.jpeg',
      descricao: 'A FC Fontes foi constituída para buscar e oferecer soluções para o dia-a-dia do instalador, como fonte de alimentação, balun de vídeo, conectores, cabos HDMI, caixas organizadoras e de proteção, e Nobreaks - fundamentais nos projetos de Segurança Eletrônica.'
    },
    {
      img: '../../../assets/patrocinadores/logo_megatron.png',
      descricao: 'Totalmente consolidada no segmento e com foco absoluto, é referência nacional  no mercado de Fios e Cabos Especiais.'
    },
  ]

}
