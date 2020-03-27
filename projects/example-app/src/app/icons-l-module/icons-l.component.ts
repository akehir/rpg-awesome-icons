import { Component, ViewEncapsulation } from '@angular/core';
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

@Component({
  selector: 'app-icons-l',
  templateUrl: './icons-l.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsLComponent {
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

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
