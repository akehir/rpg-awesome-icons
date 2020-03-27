import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

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
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-m',
  templateUrl: './icons-m.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsMComponent {
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

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
