import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsWComponent } from './icons-w.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import {provideZonelessChangeDetection} from "@angular/core";

describe('IconsDComponent', () => {
  let component: IconsWComponent;
  let fixture: ComponentFixture<IconsWComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsWComponent ],
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
    fixture = TestBed.createComponent(IconsWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
