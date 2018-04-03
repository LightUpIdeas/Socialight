import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTableComponent } from './dashtable.component';

describe('DashTableComponent', () => {
  let component: DashTableComponent;
  let fixture: ComponentFixture<DashTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
