import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsCComponent } from './icons-c.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import {provideZonelessChangeDetection} from "@angular/core";

describe('IconsCComponent', () => {
  let component: IconsCComponent;
  let fixture: ComponentFixture<IconsCComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsCComponent ],
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
    fixture = TestBed.createComponent(IconsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
