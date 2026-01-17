import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSComponent } from './icons-s.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import {provideZonelessChangeDetection} from "@angular/core";

describe('IconsSComponent', () => {
  let component: IconsSComponent;
  let fixture: ComponentFixture<IconsSComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsSComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
