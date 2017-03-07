import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication2WayComponent } from './communication-2-way.component';

describe('Communication2WayComponent', () => {
  let component: Communication2WayComponent;
  let fixture: ComponentFixture<Communication2WayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication2WayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication2WayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
