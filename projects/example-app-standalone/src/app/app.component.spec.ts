import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {provideRouter} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideRouter([])]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'example-app-standalone' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('example-app-standalone');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('example-app-standalone');
  });
});
