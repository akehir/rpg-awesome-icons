import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';

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
  standalone: false,
})
export class IconsHComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
