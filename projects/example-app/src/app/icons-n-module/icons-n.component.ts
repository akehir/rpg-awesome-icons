import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconNails,
  rpgAwesomeIconNodular,
  rpgAwesomeIconNoose,
  rpgAwesomeIconNuclear,
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-n',
  templateUrl: './icons-n.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsNComponent {
  icons = [
    rpgAwesomeIconNails,
    rpgAwesomeIconNodular,
    rpgAwesomeIconNoose,
    rpgAwesomeIconNuclear,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
