import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsOComponent } from './icons-o.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IconsOComponent', () => {
  let component: IconsOComponent;
  let fixture: ComponentFixture<IconsOComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [IconsOComponent],
      imports: [RpgAwesomeIconsModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
