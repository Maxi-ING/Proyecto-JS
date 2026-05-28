import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculopeso } from './calculopeso';

describe('Calculopeso', () => {
  let component: Calculopeso;
  let fixture: ComponentFixture<Calculopeso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculopeso],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculopeso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
