import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoRadioComponent } from './yes-no-radio.component';

describe('YesNoRadioComponent', () => {
  let component: YesNoRadioComponent;
  let fixture: ComponentFixture<YesNoRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesNoRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
