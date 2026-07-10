import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsXComponent } from './icons-x.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IconsXComponent', () => {
  let component: IconsXComponent;
  let fixture: ComponentFixture<IconsXComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [IconsXComponent],
      imports: [RpgAwesomeIconsModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
