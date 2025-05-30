import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconDaggers,
  rpgAwesomeIconDaisy,
  rpgAwesomeIconDeadTree,
  rpgAwesomeIconDeathSkull,
  rpgAwesomeIconDecapitation,
  rpgAwesomeIconDefibrillate,
  rpgAwesomeIconDemolish,
  rpgAwesomeIconDervishSwords,
  rpgAwesomeIconDesertSkull,
  rpgAwesomeIconDiamond,
  rpgAwesomeIconDiamondsCard,
  rpgAwesomeIconDiamonds,
  rpgAwesomeIconDiceFive,
  rpgAwesomeIconDiceFour,
  rpgAwesomeIconDiceOne,
  rpgAwesomeIconDiceSix,
  rpgAwesomeIconDiceThree,
  rpgAwesomeIconDiceTwo,
  rpgAwesomeIconDinosaur,
  rpgAwesomeIconDivert,
  rpgAwesomeIconDivingDagger,
  rpgAwesomeIconDoubleTeam,
  rpgAwesomeIconDoubled,
  rpgAwesomeIconDragonBreath,
  rpgAwesomeIconDragonWing,
  rpgAwesomeIconDragon,
  rpgAwesomeIconDragonfly,
  rpgAwesomeIconDrill,
  rpgAwesomeIconDrippingBlade,
  rpgAwesomeIconDrippingKnife,
  rpgAwesomeIconDrippingSword,
  rpgAwesomeIconDropletSplash,
  rpgAwesomeIconDroplet,
  rpgAwesomeIconDroplets,
  rpgAwesomeIconDuel,
} from '@triangular/rpg-awesome-icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-d',
  templateUrl: './icons-d.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsDComponent {
  icons = [
    rpgAwesomeIconDaggers,
    rpgAwesomeIconDaisy,
    rpgAwesomeIconDeadTree,
    rpgAwesomeIconDeathSkull,
    rpgAwesomeIconDecapitation,
    rpgAwesomeIconDefibrillate,
    rpgAwesomeIconDemolish,
    rpgAwesomeIconDervishSwords,
    rpgAwesomeIconDesertSkull,
    rpgAwesomeIconDiamond,
    rpgAwesomeIconDiamondsCard,
    rpgAwesomeIconDiamonds,
    rpgAwesomeIconDiceFive,
    rpgAwesomeIconDiceFour,
    rpgAwesomeIconDiceOne,
    rpgAwesomeIconDiceSix,
    rpgAwesomeIconDiceThree,
    rpgAwesomeIconDiceTwo,
    rpgAwesomeIconDinosaur,
    rpgAwesomeIconDivert,
    rpgAwesomeIconDivingDagger,
    rpgAwesomeIconDoubleTeam,
    rpgAwesomeIconDoubled,
    rpgAwesomeIconDragonBreath,
    rpgAwesomeIconDragonWing,
    rpgAwesomeIconDragon,
    rpgAwesomeIconDragonfly,
    rpgAwesomeIconDrill,
    rpgAwesomeIconDrippingBlade,
    rpgAwesomeIconDrippingKnife,
    rpgAwesomeIconDrippingSword,
    rpgAwesomeIconDropletSplash,
    rpgAwesomeIconDroplet,
    rpgAwesomeIconDroplets,
    rpgAwesomeIconDuel,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
