import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsGComponent } from './icons-g.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IconsGComponent', () => {
  let component: IconsGComponent;
  let fixture: ComponentFixture<IconsGComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [IconsGComponent],
      imports: [RpgAwesomeIconsModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
