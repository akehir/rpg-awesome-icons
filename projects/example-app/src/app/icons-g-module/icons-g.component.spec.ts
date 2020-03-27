import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsGComponent } from './icons-g.component';

describe('IconsGComponent', () => {
  let component: IconsGComponent;
  let fixture: ComponentFixture<IconsGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
