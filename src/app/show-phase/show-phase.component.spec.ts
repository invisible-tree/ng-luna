import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPhaseComponent } from './show-phase.component';

describe('ShowPhaseComponent', () => {
  let component: ShowPhaseComponent;
  let fixture: ComponentFixture<ShowPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
