import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconVase,
  rpgAwesomeIconVenomousSnake,
  rpgAwesomeIconVest,
  rpgAwesomeIconVial,
  rpgAwesomeIconVineWhip,
  rpgAwesomeIconVirgo,
} from '@triangular/rpg-awesome-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-v',
  templateUrl: './icons-v.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsVComponent {
  icons = [
    rpgAwesomeIconVase,
    rpgAwesomeIconVenomousSnake,
    rpgAwesomeIconVest,
    rpgAwesomeIconVial,
    rpgAwesomeIconVineWhip,
    rpgAwesomeIconVirgo,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
