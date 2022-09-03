import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIncialAdmComponent } from './pagina-incial-adm.component';

describe('PaginaIncialAdmComponent', () => {
  let component: PaginaIncialAdmComponent;
  let fixture: ComponentFixture<PaginaIncialAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaIncialAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaIncialAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
