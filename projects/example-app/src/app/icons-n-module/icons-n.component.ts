import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconNails,
  rpgAwesomeIconNodular,
  rpgAwesomeIconNoose,
  rpgAwesomeIconNuclear,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-n',
  templateUrl: './icons-n.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsNComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconNails,
    rpgAwesomeIconNodular,
    rpgAwesomeIconNoose,
    rpgAwesomeIconNuclear,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
