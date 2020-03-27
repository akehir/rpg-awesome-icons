import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSComponent } from './icons-s.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

describe('IconsSComponent', () => {
  let component: IconsSComponent;
  let fixture: ComponentFixture<IconsSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsSComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
