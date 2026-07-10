import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';
import { RouterTestingModule } from '@angular/router/testing';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, SearchComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RpgAwesomeIconsModule,
      ],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents()
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular RpgAwesome Lazy Loaded Icon Lib'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular RpgAwesome Lazy Loaded Icon Lib');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Angular RpgAwesome Lazy Loaded Icon Lib'
    );
  });
});
