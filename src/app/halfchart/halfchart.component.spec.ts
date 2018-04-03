import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfChartComponent } from './halfchart.component';

describe('HalfChartComponent', () => {
  let component: HalfChartComponent;
  let fixture: ComponentFixture<HalfChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
