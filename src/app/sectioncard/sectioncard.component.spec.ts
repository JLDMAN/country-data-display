import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncardComponent } from './sectioncard.component';

describe('SectioncardComponent', () => {
  let component: SectioncardComponent;
  let fixture: ComponentFixture<SectioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioncardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
