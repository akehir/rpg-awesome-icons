import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconIceCube,
  rpgAwesomeIconImplosion,
  rpgAwesomeIconIncense,
  rpgAwesomeIconInsectJaws,
  rpgAwesomeIconInterdiction,
} from '@triangular/rpg-awesome-icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-i',
  templateUrl: './icons-i.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsIComponent {
  icons = [
    rpgAwesomeIconIceCube,
    rpgAwesomeIconImplosion,
    rpgAwesomeIconIncense,
    rpgAwesomeIconInsectJaws,
    rpgAwesomeIconInterdiction,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
