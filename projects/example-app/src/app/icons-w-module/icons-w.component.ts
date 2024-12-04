import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconWaterDrop,
  rpgAwesomeIconWifi,
  rpgAwesomeIconWirelessSignal,
  rpgAwesomeIconWolfHead,
  rpgAwesomeIconWolfHowl,
  rpgAwesomeIconWoodenSign,
  rpgAwesomeIconWrench,
  rpgAwesomeIconWyvern,
} from '@triangular/rpg-awesome-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-w',
  templateUrl: './icons-w.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsWComponent {
  icons = [
    rpgAwesomeIconWaterDrop,
    rpgAwesomeIconWifi,
    rpgAwesomeIconWirelessSignal,
    rpgAwesomeIconWolfHead,
    rpgAwesomeIconWolfHowl,
    rpgAwesomeIconWoodenSign,
    rpgAwesomeIconWrench,
    rpgAwesomeIconWyvern,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
