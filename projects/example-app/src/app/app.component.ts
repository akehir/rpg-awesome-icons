import { Component, ViewEncapsulation } from '@angular/core';
import {usage, component, ngModule, standaloneComponent} from './code';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: false
})
export class AppComponent {
  title = 'Angular RpgAwesome Lazy Loaded Icon Lib';
  step2 = ngModule;
  step3a = component;
  step3b = standaloneComponent;
  step4 = usage;
}
