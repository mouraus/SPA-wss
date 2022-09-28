import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastroProdutosComponent } from './formulario-cadastro-produtos.component';

describe('FormularioCadastroProdutosComponent', () => {
  let component: FormularioCadastroProdutosComponent;
  let fixture: ComponentFixture<FormularioCadastroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCadastroProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCadastroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
