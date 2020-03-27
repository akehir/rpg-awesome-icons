import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsGComponent } from './icons-g.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

describe('IconsGComponent', () => {
  let component: IconsGComponent;
  let fixture: ComponentFixture<IconsGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsGComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
