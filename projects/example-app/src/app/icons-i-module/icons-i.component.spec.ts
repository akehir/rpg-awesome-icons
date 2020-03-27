import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsIComponent } from './icons-i.component';

describe('IconsIComponent', () => {
  let component: IconsIComponent;
  let fixture: ComponentFixture<IconsIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
