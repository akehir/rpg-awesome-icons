import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {rpgAwesomeIconLanternFlame,
  rpgAwesomeIconLargeHammer,
  rpgAwesomeIconLaserBlast,
  rpgAwesomeIconLaserSite,
  rpgAwesomeIconLava,
  rpgAwesomeIconLeaf,
  rpgAwesomeIconLeo,
  rpgAwesomeIconLevelFourAdvanced,
  rpgAwesomeIconLevelFour,
  rpgAwesomeIconLevelThreeAdvanced,
  rpgAwesomeIconLevelThree,
  rpgAwesomeIconLevelTwoAdvanced,
  rpgAwesomeIconLevelTwo,
  rpgAwesomeIconLever,
  rpgAwesomeIconLibra,
  rpgAwesomeIconLightBulb,
  rpgAwesomeIconLighthouse,
  rpgAwesomeIconLightningBolt,
  rpgAwesomeIconLightningStorm,
  rpgAwesomeIconLightningSword,
  rpgAwesomeIconLightningTrio,
  rpgAwesomeIconLightning,
  rpgAwesomeIconLion,
  rpgAwesomeIconLitCandelabra,
  rpgAwesomeIconLoad,
  rpgAwesomeIconLockedFortress,
  rpgAwesomeIconLoveHowl,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-l',
  templateUrl: './icons-l.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsLComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [rpgAwesomeIconLanternFlame,
    rpgAwesomeIconLargeHammer,
    rpgAwesomeIconLaserBlast,
    rpgAwesomeIconLaserSite,
    rpgAwesomeIconLava,
    rpgAwesomeIconLeaf,
    rpgAwesomeIconLeo,
    rpgAwesomeIconLevelFourAdvanced,
    rpgAwesomeIconLevelFour,
    rpgAwesomeIconLevelThreeAdvanced,
    rpgAwesomeIconLevelThree,
    rpgAwesomeIconLevelTwoAdvanced,
    rpgAwesomeIconLevelTwo,
    rpgAwesomeIconLever,
    rpgAwesomeIconLibra,
    rpgAwesomeIconLightBulb,
    rpgAwesomeIconLighthouse,
    rpgAwesomeIconLightningBolt,
    rpgAwesomeIconLightningStorm,
    rpgAwesomeIconLightningSword,
    rpgAwesomeIconLightningTrio,
    rpgAwesomeIconLightning,
    rpgAwesomeIconLion,
    rpgAwesomeIconLitCandelabra,
    rpgAwesomeIconLoad,
    rpgAwesomeIconLockedFortress,
    rpgAwesomeIconLoveHowl,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
