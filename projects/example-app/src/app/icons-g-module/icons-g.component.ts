import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

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
} from '@triangular/rpg-awesome-icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-g',
  templateUrl: './icons-g.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsGComponent {
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

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
