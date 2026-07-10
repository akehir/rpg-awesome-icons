import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconOcarina,
  rpgAwesomeIconOceanEmblem,
  rpgAwesomeIconOctopus,
  rpgAwesomeIconOmega,
  rpgAwesomeIconOnTarget,
  rpgAwesomeIconOphiuchus,
  rpgAwesomeIconOverhead,
  rpgAwesomeIconOvermind,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-o',
  templateUrl: './icons-o.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class IconsOComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconOcarina,
    rpgAwesomeIconOceanEmblem,
    rpgAwesomeIconOctopus,
    rpgAwesomeIconOmega,
    rpgAwesomeIconOnTarget,
    rpgAwesomeIconOphiuchus,
    rpgAwesomeIconOverhead,
    rpgAwesomeIconOvermind,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
