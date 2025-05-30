import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconEggPod,
  rpgAwesomeIconEgg,
  rpgAwesomeIconEggplant,
  rpgAwesomeIconEmerald,
  rpgAwesomeIconEnergise,
  rpgAwesomeIconExplosion,
  rpgAwesomeIconExplosiveMaterials,
  rpgAwesomeIconEyeMonster,
  rpgAwesomeIconEyeShield,
  rpgAwesomeIconEyeball,
} from '@triangular/rpg-awesome-icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-e',
  templateUrl: './icons-e.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsEComponent {
  icons = [
    rpgAwesomeIconEggPod,
    rpgAwesomeIconEgg,
    rpgAwesomeIconEggplant,
    rpgAwesomeIconEmerald,
    rpgAwesomeIconEnergise,
    rpgAwesomeIconExplosion,
    rpgAwesomeIconExplosiveMaterials,
    rpgAwesomeIconEyeMonster,
    rpgAwesomeIconEyeShield,
    rpgAwesomeIconEyeball,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
