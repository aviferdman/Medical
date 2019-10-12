import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTogetherComponent } from './buttons-together.component';

describe('ButtonsTogetherComponent', () => {
  let component: ButtonsTogetherComponent;
  let fixture: ComponentFixture<ButtonsTogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsTogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
