import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconRabbit,
  rpgAwesomeIconRadarDish,
  rpgAwesomeIconRadialBalance,
  rpgAwesomeIconRadioactive,
  rpgAwesomeIconRaven,
  rpgAwesomeIconReactor,
  rpgAwesomeIconRecycle,
  rpgAwesomeIconRegeneration,
  rpgAwesomeIconRelicBlade,
  rpgAwesomeIconRepair,
  rpgAwesomeIconReverse,
  rpgAwesomeIconRevolver,
  rpgAwesomeIconRifle,
  rpgAwesomeIconRingingBell,
  rpgAwesomeIconRoastChicken,
  rpgAwesomeIconRobotArm,
  rpgAwesomeIconRoundBottomFlask,
  rpgAwesomeIconRoundShield,
  rpgAwesomeIconRss,
  rpgAwesomeIconRuneStone,
} from '@triangular/rpg-awesome-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-r',
  templateUrl: './icons-r.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsRComponent {
  icons = [
    rpgAwesomeIconRabbit,
    rpgAwesomeIconRadarDish,
    rpgAwesomeIconRadialBalance,
    rpgAwesomeIconRadioactive,
    rpgAwesomeIconRaven,
    rpgAwesomeIconReactor,
    rpgAwesomeIconRecycle,
    rpgAwesomeIconRegeneration,
    rpgAwesomeIconRelicBlade,
    rpgAwesomeIconRepair,
    rpgAwesomeIconReverse,
    rpgAwesomeIconRevolver,
    rpgAwesomeIconRifle,
    rpgAwesomeIconRingingBell,
    rpgAwesomeIconRoastChicken,
    rpgAwesomeIconRobotArm,
    rpgAwesomeIconRoundBottomFlask,
    rpgAwesomeIconRoundShield,
    rpgAwesomeIconRss,
    rpgAwesomeIconRuneStone,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
