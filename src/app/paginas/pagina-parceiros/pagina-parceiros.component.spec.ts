import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaParceirosComponent } from './pagina-parceiros.component';

describe('PaginaParceirosComponent', () => {
  let component: PaginaParceirosComponent;
  let fixture: ComponentFixture<PaginaParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaParceirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
