import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstadoComponent } from './edit-estado.component';

describe('EditEstadoComponent', () => {
  let component: EditEstadoComponent;
  let fixture: ComponentFixture<EditEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
