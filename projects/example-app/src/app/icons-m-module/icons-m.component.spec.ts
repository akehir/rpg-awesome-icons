import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMComponent } from './icons-m.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

describe('IconsMComponent', () => {
  let component: IconsMComponent;
  let fixture: ComponentFixture<IconsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsMComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
