export const ngModule = `import { NgModule } from '@angular/core';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

@NgModule({
    declarations: [
    ],
    imports: [
      RpgAwesomeIconsModule,
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule { }
`;

export const component = `import { Component } from '@angular/core';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';
import {
  rpgAwesomeIconAnkh,
  // add more icons here
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-some-component-with-icons',
  template: '<rpg-awesome-icon name="ankh"></rpg-awesome-icon>',
  styles: 'svg { color: #ccc; fill: currentColor; width: 5rem; height: 5rem; }',
})
export class SomeComponentWithIcons {

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons([
      rpgAwesomeIconAnkh,
      // add more icons here
    ]);
  }
}`;

export const standaloneComponent = `import { Component } from '@angular/core';
import { RpgAwesomeIconComponent, RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';
import {
  rpgAwesomeIconAnkh,
  // add more icons here
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-some-component-with-icons',
  template: '<rpg-awesome-icon name="ankh"></rpg-awesome-icon>',
  styles: 'svg { color: #ccc; fill: currentColor; width: 5rem; height: 5rem; }',
  standalone: true,
  imports: [
    RpgAwesomeIconComponent,
  ]
})
export class SomeComponentWithIcons {

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons([
      rpgAwesomeIconAnkh,
      // add more icons here
    ]);
  }
}`;

export const usage = `<rpg-awesome-icon name="ankh"></rpg-awesome-icon>`;
