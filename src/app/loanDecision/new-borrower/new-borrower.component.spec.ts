import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBorrowerComponent } from './new-borrower.component';

describe('NewBorrowerComponent', () => {
  let component: NewBorrowerComponent;
  let fixture: ComponentFixture<NewBorrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBorrowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
