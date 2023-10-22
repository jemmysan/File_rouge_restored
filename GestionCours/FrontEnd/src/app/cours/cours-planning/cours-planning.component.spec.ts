import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursPlanningComponent } from './cours-planning.component';

describe('CoursPlanningComponent', () => {
  let component: CoursPlanningComponent;
  let fixture: ComponentFixture<CoursPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursPlanningComponent]
    });
    fixture = TestBed.createComponent(CoursPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
