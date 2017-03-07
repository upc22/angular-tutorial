import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationOutputComponent } from './communication-output.component';

describe('CommunicationOutputComponent', () => {
  let component: CommunicationOutputComponent;
  let fixture: ComponentFixture<CommunicationOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
