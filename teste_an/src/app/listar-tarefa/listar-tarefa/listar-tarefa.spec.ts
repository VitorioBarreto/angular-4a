import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefa } from './listar-tarefa';

describe('ListarTarefa', () => {
  let component: ListarTarefa;
  let fixture: ComponentFixture<ListarTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTarefa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
