import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductos } from './lista-productos.component';

describe('ListaProductosComponent', () => {
  let component: ListaProductos;
  let fixture: ComponentFixture<ListaProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaProductos]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
