import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleReviewCardComponent } from './simple-review-card.component';

describe('SimpleReviewCardComponent', () => {
  let component: SimpleReviewCardComponent;
  let fixture: ComponentFixture<SimpleReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleReviewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
