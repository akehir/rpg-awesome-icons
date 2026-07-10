import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAComponent } from './icons-a.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IconsAComponent', () => {
  let component: IconsAComponent;
  let fixture: ComponentFixture<IconsAComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [IconsAComponent],
      imports: [RpgAwesomeIconsModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
