import { Component, ViewEncapsulation } from '@angular/core';
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

@Component({
  selector: 'app-icons-k',
  templateUrl: './icons-k.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsKComponent {
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

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
