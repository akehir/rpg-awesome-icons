import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconKaleidoscope,
  rpgAwesomeIconKettlebell,
  rpgAwesomeIconKeyBasic,
  rpgAwesomeIconKey,
  rpgAwesomeIconKitchenKnives,
  rpgAwesomeIconKnifeFork,
  rpgAwesomeIconKnife,
  rpgAwesomeIconKnightHelmet,
  rpgAwesomeIconKunai,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-k',
  templateUrl: './icons-k.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsKComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconKaleidoscope,
    rpgAwesomeIconKettlebell,
    rpgAwesomeIconKeyBasic,
    rpgAwesomeIconKey,
    rpgAwesomeIconKitchenKnives,
    rpgAwesomeIconKnifeFork,
    rpgAwesomeIconKnife,
    rpgAwesomeIconKnightHelmet,
    rpgAwesomeIconKunai,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
