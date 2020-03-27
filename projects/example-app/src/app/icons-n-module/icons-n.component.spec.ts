import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsNComponent } from './icons-n.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

describe('IconsNComponent', () => {
  let component: IconsNComponent;
  let fixture: ComponentFixture<IconsNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsNComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
