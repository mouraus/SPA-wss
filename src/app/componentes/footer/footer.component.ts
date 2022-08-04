import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public redesSociais: Array<{img:string}> = [
    {img:'../../../assets/icones/facebook.svg'},
    {img:'../../../assets/icones/instagram.svg'},
    {img:'../../../assets/icones/whatsapp.svg'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
