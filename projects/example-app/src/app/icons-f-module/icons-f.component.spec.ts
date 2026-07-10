import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFComponent } from './icons-f.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IconsFComponent', () => {
  let component: IconsFComponent;
  let fixture: ComponentFixture<IconsFComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [IconsFComponent],
      imports: [RpgAwesomeIconsModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
