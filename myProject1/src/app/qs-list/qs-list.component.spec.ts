import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsListComponent } from './qs-list.component';

describe('QsListComponent', () => {
  let component: QsListComponent;
  let fixture: ComponentFixture<QsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
