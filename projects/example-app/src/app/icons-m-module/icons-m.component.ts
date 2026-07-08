import {
  Component,
  ViewEncapsulation,
  inject,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

import {
  rpgAwesomeIconMaggot,
  rpgAwesomeIconMagnet,
  rpgAwesomeIconMassDriver,
  rpgAwesomeIconMatch,
  rpgAwesomeIconMeatHook,
  rpgAwesomeIconMeat,
  rpgAwesomeIconMedicalPack,
  rpgAwesomeIconMetalGate,
  rpgAwesomeIconMicrophone,
  rpgAwesomeIconMineWagon,
  rpgAwesomeIconMiningDiamonds,
  rpgAwesomeIconMirror,
  rpgAwesomeIconMonsterSkull,
  rpgAwesomeIconMontains,
  rpgAwesomeIconMoonSun,
  rpgAwesomeIconMp5,
  rpgAwesomeIconMuscleFat,
  rpgAwesomeIconMuscleUp,
  rpgAwesomeIconMusket,
} from "@triangular/rpg-awesome-icons/icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-m",
  templateUrl: "./icons-m.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class IconsMComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconMaggot,
    rpgAwesomeIconMagnet,
    rpgAwesomeIconMassDriver,
    rpgAwesomeIconMatch,
    rpgAwesomeIconMeatHook,
    rpgAwesomeIconMeat,
    rpgAwesomeIconMedicalPack,
    rpgAwesomeIconMetalGate,
    rpgAwesomeIconMicrophone,
    rpgAwesomeIconMineWagon,
    rpgAwesomeIconMiningDiamonds,
    rpgAwesomeIconMirror,
    rpgAwesomeIconMonsterSkull,
    rpgAwesomeIconMontains,
    rpgAwesomeIconMoonSun,
    rpgAwesomeIconMp5,
    rpgAwesomeIconMuscleFat,
    rpgAwesomeIconMuscleUp,
    rpgAwesomeIconMusket,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
