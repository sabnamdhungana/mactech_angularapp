import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrhomeComponent } from './mgrhome.component';

describe('MgrhomeComponent', () => {
  let component: MgrhomeComponent;
  let fixture: ComponentFixture<MgrhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
