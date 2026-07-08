import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

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
} from "@triangular/rpg-awesome-icons/icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-d",
  templateUrl: "./icons-d.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class IconsDComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
