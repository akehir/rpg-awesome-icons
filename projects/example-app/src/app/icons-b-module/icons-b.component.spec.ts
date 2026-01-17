import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBComponent } from './icons-b.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import {provideZonelessChangeDetection} from "@angular/core";

describe('IconsBComponent', () => {
  let component: IconsBComponent;
  let fixture: ComponentFixture<IconsBComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsBComponent ],
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
    fixture = TestBed.createComponent(IconsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
