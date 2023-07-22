import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgAwesomeIconComponent } from './icon.component';

describe('RpgAwesomeIconComponent', () => {
  let component: RpgAwesomeIconComponent;
  let fixture: ComponentFixture<RpgAwesomeIconComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgAwesomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
