import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProductCardComponent } from './simple-product-card.component';

describe('SimpleProductCardComponent', () => {
  let component: SimpleProductCardComponent;
  let fixture: ComponentFixture<SimpleProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
