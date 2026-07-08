import {
  Component,
  ViewEncapsulation,
  inject,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

import {
  rpgAwesomeIconFairyWand,
  rpgAwesomeIconFairy,
  rpgAwesomeIconFallDown,
  rpgAwesomeIconFalling,
  rpgAwesomeIconFastShip,
  rpgAwesomeIconFeatherWing,
  rpgAwesomeIconFeatheredWing,
  rpgAwesomeIconFedora,
  rpgAwesomeIconFireBomb,
  rpgAwesomeIconFireBreath,
  rpgAwesomeIconFireRing,
  rpgAwesomeIconFireShield,
  rpgAwesomeIconFireSymbol,
  rpgAwesomeIconFire,
  rpgAwesomeIconFireballSword,
  rpgAwesomeIconFish,
  rpgAwesomeIconFizzingFlask,
  rpgAwesomeIconFlameSymbol,
  rpgAwesomeIconFlamingArrow,
  rpgAwesomeIconFlamingClaw,
  rpgAwesomeIconFlamingTrident,
  rpgAwesomeIconFlask,
  rpgAwesomeIconFlatHammer,
  rpgAwesomeIconFlower,
  rpgAwesomeIconFlowers,
  rpgAwesomeIconFluffySwirl,
  rpgAwesomeIconFocusedLightning,
  rpgAwesomeIconFoodChain,
  rpgAwesomeIconFootprint,
  rpgAwesomeIconForging,
  rpgAwesomeIconForward,
  rpgAwesomeIconFox,
  rpgAwesomeIconFrostEmblem,
  rpgAwesomeIconFrostfire,
  rpgAwesomeIconFrozenArrow,
} from "@triangular/rpg-awesome-icons/icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-f",
  templateUrl: "./icons-f.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class IconsFComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconFairyWand,
    rpgAwesomeIconFairy,
    rpgAwesomeIconFallDown,
    rpgAwesomeIconFalling,
    rpgAwesomeIconFastShip,
    rpgAwesomeIconFeatherWing,
    rpgAwesomeIconFeatheredWing,
    rpgAwesomeIconFedora,
    rpgAwesomeIconFireBomb,
    rpgAwesomeIconFireBreath,
    rpgAwesomeIconFireRing,
    rpgAwesomeIconFireShield,
    rpgAwesomeIconFireSymbol,
    rpgAwesomeIconFire,
    rpgAwesomeIconFireballSword,
    rpgAwesomeIconFish,
    rpgAwesomeIconFizzingFlask,
    rpgAwesomeIconFlameSymbol,
    rpgAwesomeIconFlamingArrow,
    rpgAwesomeIconFlamingClaw,
    rpgAwesomeIconFlamingTrident,
    rpgAwesomeIconFlask,
    rpgAwesomeIconFlatHammer,
    rpgAwesomeIconFlower,
    rpgAwesomeIconFlowers,
    rpgAwesomeIconFluffySwirl,
    rpgAwesomeIconFocusedLightning,
    rpgAwesomeIconFoodChain,
    rpgAwesomeIconFootprint,
    rpgAwesomeIconForging,
    rpgAwesomeIconForward,
    rpgAwesomeIconFox,
    rpgAwesomeIconFrostEmblem,
    rpgAwesomeIconFrostfire,
    rpgAwesomeIconFrozenArrow,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
