import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrloginComponent } from './mgrlogin.component';

describe('MgrloginComponent', () => {
  let component: MgrloginComponent;
  let fixture: ComponentFixture<MgrloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
