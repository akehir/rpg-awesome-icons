import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsRComponent } from './icons-r.component';

describe('IconsRComponent', () => {
  let component: IconsRComponent;
  let fixture: ComponentFixture<IconsRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
