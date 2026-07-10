import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsKComponent } from './icons-k.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IconsKComponent', () => {
  let component: IconsKComponent;
  let fixture: ComponentFixture<IconsKComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [IconsKComponent],
      imports: [RpgAwesomeIconsModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
