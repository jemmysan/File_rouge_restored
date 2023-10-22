import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuleComponent } from './annule.component';

describe('AnnuleComponent', () => {
  let component: AnnuleComponent;
  let fixture: ComponentFixture<AnnuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnuleComponent]
    });
    fixture = TestBed.createComponent(AnnuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
