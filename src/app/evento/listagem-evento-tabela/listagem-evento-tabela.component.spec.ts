import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEventoTabelaComponent } from './listagem-evento-tabela.component';

describe('ListagemEventoTabelaComponent', () => {
  let component: ListagemEventoTabelaComponent;
  let fixture: ComponentFixture<ListagemEventoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemEventoTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemEventoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
