import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrnavbarComponent } from './mgrnavbar.component';

describe('MgrnavbarComponent', () => {
  let component: MgrnavbarComponent;
  let fixture: ComponentFixture<MgrnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
