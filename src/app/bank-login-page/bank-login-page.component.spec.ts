import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLoginPageComponent } from './bank-login-page.component';

describe('BankLoginPageComponent', () => {
  let component: BankLoginPageComponent;
  let fixture: ComponentFixture<BankLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
