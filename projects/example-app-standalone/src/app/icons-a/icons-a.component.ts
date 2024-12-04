import { Component, ViewEncapsulation } from '@angular/core';
import {RpgAwesomeIconComponent, RpgAwesomeIconsRegistry,} from '@triangular/rpg-awesome-icons';

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
} from '@triangular/rpg-awesome-icons/icons';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-icons-a',
    templateUrl: './icons-a.component.html',
    styleUrls: [],
    encapsulation: ViewEncapsulation.None,
    imports: [
        NgForOf,
        RpgAwesomeIconComponent
    ]
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
