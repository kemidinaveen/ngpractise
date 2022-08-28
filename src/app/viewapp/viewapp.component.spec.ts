import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappComponent } from './viewapp.component';

describe('ViewappComponent', () => {
  let component: ViewappComponent;
  let fixture: ComponentFixture<ViewappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
