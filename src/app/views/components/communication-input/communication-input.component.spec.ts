import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationInputComponent } from './communication-input.component';

describe('CommunicationInputComponent', () => {
  let component: CommunicationInputComponent;
  let fixture: ComponentFixture<CommunicationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
