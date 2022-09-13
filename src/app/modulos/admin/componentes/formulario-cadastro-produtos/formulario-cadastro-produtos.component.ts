import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-formulario-cadastro-produtos',
  templateUrl: './formulario-cadastro-produtos.component.html',
  styleUrls: ['./formulario-cadastro-produtos.component.scss']
})
export class FormularioCadastroProdutosComponent implements OnInit {

  constructor(private http :HttpClient) { }

public nome_produto:string = ""
public categoria:string = ""
public subcategoria:string = ""
public disponibilidade:string = ""
public codigo_produto:string = ""
public marca:string = ""
public descricao:string = ""
public destaque?:any
public nome_imagem:string = ""



  public formularioCadastroProdutos:{
    nome_produto:string,
    categoria:string,
    subcategoria:string,
    disponibilidade:string,
    codigo_produto:string,
    marca:string,
    descricao:string,
    destaque:any,
    nome_imagem:string
  } = {
      nome_produto:"",
      categoria:"",
      subcategoria:"",
      disponibilidade:"",
      codigo_produto:"",
      descricao:"",
      marca:"",
      nome_imagem:"",
      destaque:0
  }

  private setFormularioCadastroProdutos(nome_produto:string,destaque:number,categoria:string,subcategoria:string,disponibilidade:string,codigo_produto:string,marca:string,descricao:string,nome_imagem:string){
      this.formularioCadastroProdutos.nome_produto = nome_produto,
      this.formularioCadastroProdutos.categoria = categoria,
      this.formularioCadastroProdutos.subcategoria = subcategoria,
      this.formularioCadastroProdutos.disponibilidade = disponibilidade,
      this.formularioCadastroProdutos.codigo_produto = codigo_produto,
      this.formularioCadastroProdutos.descricao = descricao,
      this.formularioCadastroProdutos.marca = marca,
      this.formularioCadastroProdutos.destaque= destaque,
      this.formularioCadastroProdutos.nome_imagem = nome_imagem      
    }

    private jwt:any = localStorage.getItem('jwt');

  public cadastrarProduto( nome_produto:string,destaque:number,categoria:string,subcategoria:string,disponibilidade:string,codigo_produto:string,marca:string,descricao:string,nome_imagem:string){
      this.setFormularioCadastroProdutos(nome_produto,destaque,categoria,subcategoria,disponibilidade,codigo_produto,marca,descricao,nome_imagem)
      console.log(this.formularioCadastroProdutos);

      const httpHeaders = new HttpHeaders({
        'content-type':'application/json',
        'Authorization': "Bearer " + this.jwt.token
      })
      this.http.post("https://wss-dev.herokuapp.com/produtos",this.formularioCadastroProdutos,{ headers: httpHeaders ,observe:'response'})
      .subscribe((response)=>{
          
        console.log(response.status.toString());
               
      })
  }


  ngOnInit(): void {
    this.jwt = JSON.parse(this.jwt)
    console.log(this.jwt);
    
  }

  }