import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerBorrowerComponent } from './former-borrower.component';

describe('FormerBorrowerComponent', () => {
  let component: FormerBorrowerComponent;
  let fixture: ComponentFixture<FormerBorrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerBorrowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
