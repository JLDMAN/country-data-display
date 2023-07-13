import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagcardComponent } from './flagcard.component';

describe('FlagcardComponent', () => {
  let component: FlagcardComponent;
  let fixture: ComponentFixture<FlagcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
