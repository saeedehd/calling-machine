import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashabaordComponent } from './dashabaord.component';

describe('DashabaordComponent', () => {
  let component: DashabaordComponent;
  let fixture: ComponentFixture<DashabaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashabaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashabaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
