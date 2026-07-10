import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconVase,
  rpgAwesomeIconVenomousSnake,
  rpgAwesomeIconVest,
  rpgAwesomeIconVial,
  rpgAwesomeIconVineWhip,
  rpgAwesomeIconVirgo,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-v',
  templateUrl: './icons-v.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class IconsVComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconVase,
    rpgAwesomeIconVenomousSnake,
    rpgAwesomeIconVest,
    rpgAwesomeIconVial,
    rpgAwesomeIconVineWhip,
    rpgAwesomeIconVirgo,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
