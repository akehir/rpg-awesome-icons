import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconTargetArrows,
  rpgAwesomeIconTargetLaser,
  rpgAwesomeIconTargeted,
  rpgAwesomeIconTaurus,
  rpgAwesomeIconTelescope,
  rpgAwesomeIconTentacle,
  rpgAwesomeIconTesla,
  rpgAwesomeIconThornArrow,
  rpgAwesomeIconThornyVine,
  rpgAwesomeIconThreeKeys,
  rpgAwesomeIconTicTacToe,
  rpgAwesomeIconToast,
  rpgAwesomeIconTombstone,
  rpgAwesomeIconTooth,
  rpgAwesomeIconTorch,
  rpgAwesomeIconTower,
  rpgAwesomeIconTrail,
  rpgAwesomeIconTrefoilLily,
  rpgAwesomeIconTrident,
  rpgAwesomeIconTriforce,
  rpgAwesomeIconTrophy,
  rpgAwesomeIconTurd,
  rpgAwesomeIconTwoDragons,
  rpgAwesomeIconTwoHearts,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-t',
  templateUrl: './icons-t.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsTComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconTargetArrows,
    rpgAwesomeIconTargetLaser,
    rpgAwesomeIconTargeted,
    rpgAwesomeIconTaurus,
    rpgAwesomeIconTelescope,
    rpgAwesomeIconTentacle,
    rpgAwesomeIconTesla,
    rpgAwesomeIconThornArrow,
    rpgAwesomeIconThornyVine,
    rpgAwesomeIconThreeKeys,
    rpgAwesomeIconTicTacToe,
    rpgAwesomeIconToast,
    rpgAwesomeIconTombstone,
    rpgAwesomeIconTooth,
    rpgAwesomeIconTorch,
    rpgAwesomeIconTower,
    rpgAwesomeIconTrail,
    rpgAwesomeIconTrefoilLily,
    rpgAwesomeIconTrident,
    rpgAwesomeIconTriforce,
    rpgAwesomeIconTrophy,
    rpgAwesomeIconTurd,
    rpgAwesomeIconTwoDragons,
    rpgAwesomeIconTwoHearts,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
