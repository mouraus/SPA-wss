import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/servicos/email.service';
import { ContatoModel } from './contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  public email:ContatoModel = {nome:"", email:"", mensagem:""}

  constructor(private api:EmailService) { }

  public enviarEmail(e:any){
    this.api.enviarEmail(e)
  }
  ngOnInit(): void {
  }

}
