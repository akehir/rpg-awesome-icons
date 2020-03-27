import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconUncertainty,
  rpgAwesomeIconUnderhand,
  rpgAwesomeIconUnplugged,
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-u',
  templateUrl: './icons-u.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsUComponent {
  icons = [
    rpgAwesomeIconUncertainty,
    rpgAwesomeIconUnderhand,
    rpgAwesomeIconUnplugged,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
