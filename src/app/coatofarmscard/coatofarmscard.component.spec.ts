import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatofarmscardComponent } from './coatofarmscard.component';

describe('CoatofarmscardComponent', () => {
  let component: CoatofarmscardComponent;
  let fixture: ComponentFixture<CoatofarmscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatofarmscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatofarmscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
