import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBorrowerRenewalComponent } from './new-borrower-renewal.component';

describe('NewBorrowerRenewalComponent', () => {
  let component: NewBorrowerRenewalComponent;
  let fixture: ComponentFixture<NewBorrowerRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBorrowerRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBorrowerRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
