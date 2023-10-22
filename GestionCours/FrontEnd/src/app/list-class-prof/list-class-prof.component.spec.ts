import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassProfComponent } from './list-class-prof.component';

describe('ListClassProfComponent', () => {
  let component: ListClassProfComponent;
  let fixture: ComponentFixture<ListClassProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListClassProfComponent]
    });
    fixture = TestBed.createComponent(ListClassProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
