import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LDatapickerComponent } from './l-datapicker.component';

describe('LDatapickerComponent', () => {
  let component: LDatapickerComponent;
  let fixture: ComponentFixture<LDatapickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LDatapickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LDatapickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
