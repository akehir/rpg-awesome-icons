import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsZComponent } from './icons-z.component';

describe('IconsZComponent', () => {
  let component: IconsZComponent;
  let fixture: ComponentFixture<IconsZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
