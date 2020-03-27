import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconZebraShield,
  rpgAwesomeIconZigzagLeaf,
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-z',
  templateUrl: './icons-z.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsZComponent {
  icons = [
    rpgAwesomeIconZebraShield,
    rpgAwesomeIconZigzagLeaf,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
