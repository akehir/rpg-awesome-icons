import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconGamepadCross,
  rpgAwesomeIconGavel,
  rpgAwesomeIconGearHammer,
  rpgAwesomeIconGearHeart,
  rpgAwesomeIconGears,
  rpgAwesomeIconGecko,
  rpgAwesomeIconGemPendant,
  rpgAwesomeIconGem,
  rpgAwesomeIconGemini,
  rpgAwesomeIconGlassHeart,
  rpgAwesomeIconGloop,
  rpgAwesomeIconGoldBar,
  rpgAwesomeIconGrapplingHook,
  rpgAwesomeIconGrassPatch,
  rpgAwesomeIconGrass,
  rpgAwesomeIconGrenade,
  rpgAwesomeIconGroundbreaker,
  rpgAwesomeIconGuardedTower,
  rpgAwesomeIconGuillotine,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-g',
  templateUrl: './icons-g.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class IconsGComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconGamepadCross,
    rpgAwesomeIconGavel,
    rpgAwesomeIconGearHammer,
    rpgAwesomeIconGearHeart,
    rpgAwesomeIconGears,
    rpgAwesomeIconGecko,
    rpgAwesomeIconGemPendant,
    rpgAwesomeIconGem,
    rpgAwesomeIconGemini,
    rpgAwesomeIconGlassHeart,
    rpgAwesomeIconGloop,
    rpgAwesomeIconGoldBar,
    rpgAwesomeIconGrapplingHook,
    rpgAwesomeIconGrassPatch,
    rpgAwesomeIconGrass,
    rpgAwesomeIconGrenade,
    rpgAwesomeIconGroundbreaker,
    rpgAwesomeIconGuardedTower,
    rpgAwesomeIconGuillotine,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
