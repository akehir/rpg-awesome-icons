import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsEComponent } from './icons-e.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

describe('IconsEComponent', () => {
  let component: IconsEComponent;
  let fixture: ComponentFixture<IconsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsEComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
