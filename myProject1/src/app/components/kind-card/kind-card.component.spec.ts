import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindCardComponent } from './kind-card.component';

describe('KindCardComponent', () => {
  let component: KindCardComponent;
  let fixture: ComponentFixture<KindCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
