import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsUComponent } from './icons-u.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import {provideZonelessChangeDetection} from "@angular/core";

describe('IconsUComponent', () => {
  let component: IconsUComponent;
  let fixture: ComponentFixture<IconsUComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsUComponent ],
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
    fixture = TestBed.createComponent(IconsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
