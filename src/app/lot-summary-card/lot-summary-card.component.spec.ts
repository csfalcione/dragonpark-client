import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotSummaryCardComponent } from './lot-summary-card.component';

describe('LotSummaryCardComponent', () => {
  let component: LotSummaryCardComponent;
  let fixture: ComponentFixture<LotSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
