import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLComponent } from './icons-l.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

describe('IconsLComponent', () => {
  let component: IconsLComponent;
  let fixture: ComponentFixture<IconsLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsLComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
