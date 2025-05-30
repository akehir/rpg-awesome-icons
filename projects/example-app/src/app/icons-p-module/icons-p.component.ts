import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconPalmTree,
  rpgAwesomeIconPawn,
  rpgAwesomeIconPawprint,
  rpgAwesomeIconPerspectiveDiceFive,
  rpgAwesomeIconPerspectiveDiceFour,
  rpgAwesomeIconPerspectiveDiceOne,
  rpgAwesomeIconPerspectiveDiceRandom,
  rpgAwesomeIconPerspectiveDiceSixTwo,
  rpgAwesomeIconPerspectiveDiceSix,
  rpgAwesomeIconPerspectiveDiceThree,
  rpgAwesomeIconPill,
  rpgAwesomeIconPills,
  rpgAwesomeIconPineTree,
  rpgAwesomeIconPingPong,
  rpgAwesomeIconPisces,
  rpgAwesomeIconPlainDagger,
  rpgAwesomeIconPlayerDespair,
  rpgAwesomeIconPlayerDodge,
  rpgAwesomeIconPlayerKing,
  rpgAwesomeIconPlayerLift,
  rpgAwesomeIconPlayerPain,
  rpgAwesomeIconPlayerPyromaniac,
  rpgAwesomeIconPlayerShot,
  rpgAwesomeIconPlayerTeleport,
  rpgAwesomeIconPlayerThunderStruck,
  rpgAwesomeIconPlayer,
  rpgAwesomeIconPodium,
  rpgAwesomeIconPoisonCloud,
  rpgAwesomeIconPotion,
  rpgAwesomeIconPyramids,
} from '@triangular/rpg-awesome-icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-p',
  templateUrl: './icons-p.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsPComponent {
  icons = [
    rpgAwesomeIconPalmTree,
    rpgAwesomeIconPawn,
    rpgAwesomeIconPawprint,
    rpgAwesomeIconPerspectiveDiceFive,
    rpgAwesomeIconPerspectiveDiceFour,
    rpgAwesomeIconPerspectiveDiceOne,
    rpgAwesomeIconPerspectiveDiceRandom,
    rpgAwesomeIconPerspectiveDiceSixTwo,
    rpgAwesomeIconPerspectiveDiceSix,
    rpgAwesomeIconPerspectiveDiceThree,
    rpgAwesomeIconPill,
    rpgAwesomeIconPills,
    rpgAwesomeIconPineTree,
    rpgAwesomeIconPingPong,
    rpgAwesomeIconPisces,
    rpgAwesomeIconPlainDagger,
    rpgAwesomeIconPlayerDespair,
    rpgAwesomeIconPlayerDodge,
    rpgAwesomeIconPlayerKing,
    rpgAwesomeIconPlayerLift,
    rpgAwesomeIconPlayerPain,
    rpgAwesomeIconPlayerPyromaniac,
    rpgAwesomeIconPlayerShot,
    rpgAwesomeIconPlayerTeleport,
    rpgAwesomeIconPlayerThunderStruck,
    rpgAwesomeIconPlayer,
    rpgAwesomeIconPodium,
    rpgAwesomeIconPoisonCloud,
    rpgAwesomeIconPotion,
    rpgAwesomeIconPyramids,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
