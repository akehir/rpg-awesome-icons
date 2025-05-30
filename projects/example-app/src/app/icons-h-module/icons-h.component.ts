import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconHalberd,
  rpgAwesomeIconHammerDrop,
  rpgAwesomeIconHammer,
  rpgAwesomeIconHandEmblem,
  rpgAwesomeIconHandSaw,
  rpgAwesomeIconHand,
  rpgAwesomeIconHarpoonTrident,
  rpgAwesomeIconHealthDecrease,
  rpgAwesomeIconHealthIncrease,
  rpgAwesomeIconHealth,
  rpgAwesomeIconHeartBottle,
  rpgAwesomeIconHeartTower,
  rpgAwesomeIconHeartburn,
  rpgAwesomeIconHeartsCard,
  rpgAwesomeIconHearts,
  rpgAwesomeIconHeatHaze,
  rpgAwesomeIconHeavyFall,
  rpgAwesomeIconHeavyShield,
  rpgAwesomeIconHelmet,
  rpgAwesomeIconHelp,
  rpgAwesomeIconHiveEmblem,
  rpgAwesomeIconHoleLadder,
  rpgAwesomeIconHoneycomb,
  rpgAwesomeIconHood,
  rpgAwesomeIconHornCall,
  rpgAwesomeIconHorns,
  rpgAwesomeIconHorseshoe,
  rpgAwesomeIconHospitalCross,
  rpgAwesomeIconHotSurface,
  rpgAwesomeIconHourglass,
  rpgAwesomeIconHydraShot,
  rpgAwesomeIconHydra,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-h',
  templateUrl: './icons-h.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsHComponent {
  icons = [
    rpgAwesomeIconHalberd,
    rpgAwesomeIconHammerDrop,
    rpgAwesomeIconHammer,
    rpgAwesomeIconHandEmblem,
    rpgAwesomeIconHandSaw,
    rpgAwesomeIconHand,
    rpgAwesomeIconHarpoonTrident,
    rpgAwesomeIconHealthDecrease,
    rpgAwesomeIconHealthIncrease,
    rpgAwesomeIconHealth,
    rpgAwesomeIconHeartBottle,
    rpgAwesomeIconHeartTower,
    rpgAwesomeIconHeartburn,
    rpgAwesomeIconHeartsCard,
    rpgAwesomeIconHearts,
    rpgAwesomeIconHeatHaze,
    rpgAwesomeIconHeavyFall,
    rpgAwesomeIconHeavyShield,
    rpgAwesomeIconHelmet,
    rpgAwesomeIconHelp,
    rpgAwesomeIconHiveEmblem,
    rpgAwesomeIconHoleLadder,
    rpgAwesomeIconHoneycomb,
    rpgAwesomeIconHood,
    rpgAwesomeIconHornCall,
    rpgAwesomeIconHorns,
    rpgAwesomeIconHorseshoe,
    rpgAwesomeIconHospitalCross,
    rpgAwesomeIconHotSurface,
    rpgAwesomeIconHourglass,
    rpgAwesomeIconHydraShot,
    rpgAwesomeIconHydra,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
