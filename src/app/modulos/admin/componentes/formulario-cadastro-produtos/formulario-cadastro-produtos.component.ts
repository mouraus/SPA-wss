import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlBaseApiService } from '../../servicos/url-base-api.service';
import { Router } from '@angular/router';
import { FormularioCadastroProdutos } from '../../interfaces/formulario-cadastro-produtos';
import { CadastroProdutosService } from '../../servicos/cadastro-produtos.service';



@Component({
  selector: 'app-formulario-cadastro-produtos',
  templateUrl: './formulario-cadastro-produtos.component.html',
  styleUrls: ['./formulario-cadastro-produtos.component.scss']
})
export class FormularioCadastroProdutosComponent implements OnInit {

  constructor(private http: HttpClient, private api: UrlBaseApiService, private router: Router , private apiCadastro:CadastroProdutosService) { }

  public errorMensagem:any = { mensagem: "" , deuErro:false}

  public nome_produto: string = ""
  public categoria: Number = 0
  public subcategoria: Number = 0
  public disponibilidade: boolean = false
  public codigo_produto: string = ""
  public marca: string = ""
  public descricao: string = ""
  public destaque?: any
  public nome_imagem: string = "alguma coisa"
  public urlimagem?: any

  public novaCategoria:string = ""; 
  public novaSubCategoria:string = ""; 

  public imagem?: any
  public categoriasSelect: Array<any> = []
  public subCategoriasSelect: Array<any> = []

  public imageError?: any;
  public isImageSaved?: any;
  public cardImageBase64?: any;

  public formularioCadastroProdutos: FormularioCadastroProdutos = {
        nome_produto : "",
        codigo_produto : "",
        descricao : "",
        id_marca : "",
        destaque : 0,
        id_imagem : 0,
        id_categoria : 0,
        id_subcategoria : 0,
        disponibilidade : false,

      }

  public setFormularioCadastroProdutos(formularioCadastroProdutos: FormularioCadastroProdutos, nome_produto: string, destaque: number, categoria: number, subcategoria: number, disponibilidade: boolean, codigo_produto: string, marca: string, descricao: string, id_imagem:number) {
    if (this.formularioCadastroProdutos !== null) {
        formularioCadastroProdutos.nome_produto = nome_produto,
        formularioCadastroProdutos.disponibilidade = disponibilidade,
        formularioCadastroProdutos.codigo_produto = codigo_produto,
        formularioCadastroProdutos.descricao = descricao,
        formularioCadastroProdutos.id_marca = marca,
        formularioCadastroProdutos.destaque = destaque,
        formularioCadastroProdutos.id_imagem = id_imagem
        formularioCadastroProdutos.id_categoria = categoria,
        formularioCadastroProdutos.id_subcategoria = subcategoria

      }
  }

  public cadastrarCategoria(novaCategoria:string){
    this.apiCadastro.cadastrarCategoria(novaCategoria)
    this.iniciaSelect()
  }
  public cadastrarSubCategoria(novaSubCategoria:string){
    this.apiCadastro.cadastrarSubCategoria(novaSubCategoria)
    this.iniciaSelect()
  }

  public cadastrarImagem(base64: any,nome_imagem:string) {
    this.apiCadastro.cadastrarImagem(base64,nome_imagem)
  }
  private cortaBase64(base64: string,nome_imagem:string) {
    this.imagem = base64.replace("data:image/png;base64,", "")
    this.cadastrarImagem(this.imagem, nome_imagem)
    console.log(base64);
    
  }

  public cadastrarProduto(nome_produto: string, destaque: number, categoria: any, subcategoria: any, disponibilidade: boolean, codigo_produto: string, marca: string, descricao: string) {
    this.setFormularioCadastroProdutos(this.formularioCadastroProdutos,nome_produto, destaque, categoria, subcategoria, disponibilidade, codigo_produto, marca, descricao,0)
   console.log(this.formularioCadastroProdutos);
   
    this.apiCadastro.cadastrarProduto(this.formularioCadastroProdutos, this.errorMensagem)
    this.isImageSaved = false;  
  }


  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError ='Maximum size allowed is ' + max_size / 1000 + 'Mb';
        return false;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          // const img_height = rs.currentTarget['height'];
          // const img_width = rs.currentTarget['width'];

          // console.log(img_height, img_width);

          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          this.cortaBase64(imgBase64Path,fileInput.target.files[0].name)
        
          // this.previewImagePath = imgBase64Path;
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return null;

  }
  removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }

  public iniciaSelect(){
    this.http.get(this.api.URL_CATEGORIA).subscribe((data: any) => {
      this.categoriasSelect = data
    })
    this.http.get(this.api.URL_SUBCATEGORIA).subscribe((data: any) => {
      this.subCategoriasSelect = data
    })
  }

  ngOnInit(): void {
   this.iniciaSelect();
  }

}