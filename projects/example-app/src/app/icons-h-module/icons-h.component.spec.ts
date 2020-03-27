import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsHComponent } from './icons-h.component';

describe('IconsHComponent', () => {
  let component: IconsHComponent;
  let fixture: ComponentFixture<IconsHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
