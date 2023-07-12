import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublecardComponent } from './doublecard.component';

describe('DoublecardComponent', () => {
  let component: DoublecardComponent;
  let fixture: ComponentFixture<DoublecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoublecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
