import { Component, ViewEncapsulation, inject } from '@angular/core';
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
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-p',
  templateUrl: './icons-p.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsPComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
