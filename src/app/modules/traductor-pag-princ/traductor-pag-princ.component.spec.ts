import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraductorPagPrincComponent } from './traductor-pag-princ.component';

describe('TraductorPagPrincComponent', () => {
  let component: TraductorPagPrincComponent;
  let fixture: ComponentFixture<TraductorPagPrincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraductorPagPrincComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraductorPagPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
