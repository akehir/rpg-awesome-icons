import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPComponent } from './icons-p.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

describe('IconsPComponent', () => {
  let component: IconsPComponent;
  let fixture: ComponentFixture<IconsPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsPComponent ],
      imports: [
        RpgAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
