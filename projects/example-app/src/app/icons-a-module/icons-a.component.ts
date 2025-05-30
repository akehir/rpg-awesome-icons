import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconAcid,
  rpgAwesomeIconAcorn,
  rpgAwesomeIconAlienFire,
  rpgAwesomeIconAllForOne,
  rpgAwesomeIconAlligatorClip,
  rpgAwesomeIconAmmoBag,
  rpgAwesomeIconAnchor,
  rpgAwesomeIconAngelWings,
  rpgAwesomeIconAnkh,
  rpgAwesomeIconAnvil,
  rpgAwesomeIconApple,
  rpgAwesomeIconAquarius,
  rpgAwesomeIconArcaneMask,
  rpgAwesomeIconArcher,
  rpgAwesomeIconArcheryTarget,
  rpgAwesomeIconArena,
  rpgAwesomeIconAries,
  rpgAwesomeIconArrowCluster,
  rpgAwesomeIconArrowFlights,
  rpgAwesomeIconArson,
  rpgAwesomeIconAura,
  rpgAwesomeIconAware,
  rpgAwesomeIconAxeSwing,
  rpgAwesomeIconAxe,
} from '@triangular/rpg-awesome-icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-a',
  templateUrl: './icons-a.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsAComponent {
  icons = [
    rpgAwesomeIconAcid,
    rpgAwesomeIconAcorn,
    rpgAwesomeIconAlienFire,
    rpgAwesomeIconAllForOne,
    rpgAwesomeIconAlligatorClip,
    rpgAwesomeIconAmmoBag,
    rpgAwesomeIconAnchor,
    rpgAwesomeIconAngelWings,
    rpgAwesomeIconAnkh,
    rpgAwesomeIconAnvil,
    rpgAwesomeIconApple,
    rpgAwesomeIconAquarius,
    rpgAwesomeIconArcaneMask,
    rpgAwesomeIconArcher,
    rpgAwesomeIconArcheryTarget,
    rpgAwesomeIconArena,
    rpgAwesomeIconAries,
    rpgAwesomeIconArrowCluster,
    rpgAwesomeIconArrowFlights,
    rpgAwesomeIconArson,
    rpgAwesomeIconAura,
    rpgAwesomeIconAware,
    rpgAwesomeIconAxeSwing,
    rpgAwesomeIconAxe,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
