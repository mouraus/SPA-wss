import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFiltroProdutosComponent } from './menu-filtro-produtos.component';

describe('MenuFiltroProdutosComponent', () => {
  let component: MenuFiltroProdutosComponent;
  let fixture: ComponentFixture<MenuFiltroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFiltroProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFiltroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
