import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoWhatsappComponent } from './botao-whatsapp.component';

describe('BotaoWhatsappComponent', () => {
  let component: BotaoWhatsappComponent;
  let fixture: ComponentFixture<BotaoWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoWhatsappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
