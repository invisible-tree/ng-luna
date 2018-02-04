import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaImageComponent } from './luna-image.component';

describe('LunaImageComponent', () => {
  let component: LunaImageComponent;
  let fixture: ComponentFixture<LunaImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunaImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
