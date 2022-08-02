import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
