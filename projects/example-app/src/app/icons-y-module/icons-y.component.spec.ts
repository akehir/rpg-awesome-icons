import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsYComponent } from './icons-d.component';

describe('IconsDComponent', () => {
  let component: IconsYComponent;
  let fixture: ComponentFixture<IconsYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
