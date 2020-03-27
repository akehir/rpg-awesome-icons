import { Component, ViewEncapsulation } from '@angular/core';
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

@Component({
  selector: 'app-icons-t',
  templateUrl: './icons-t.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsTComponent {
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

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
