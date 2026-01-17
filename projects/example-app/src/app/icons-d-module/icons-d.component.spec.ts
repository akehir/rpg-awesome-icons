import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDComponent } from './icons-d.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import {provideZonelessChangeDetection} from "@angular/core";

describe('IconsDComponent', () => {
  let component: IconsDComponent;
  let fixture: ComponentFixture<IconsDComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsDComponent ],
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
    fixture = TestBed.createComponent(IconsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
