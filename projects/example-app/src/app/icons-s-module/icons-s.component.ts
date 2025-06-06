import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconSagittarius,
  rpgAwesomeIconSapphire,
  rpgAwesomeIconSatellite,
  rpgAwesomeIconSave,
  rpgAwesomeIconScorpio,
  rpgAwesomeIconScrollUnfurled,
  rpgAwesomeIconScythe,
  rpgAwesomeIconSeaSerpent,
  rpgAwesomeIconSeagull,
  rpgAwesomeIconShark,
  rpgAwesomeIconSheep,
  rpgAwesomeIconSheriff,
  rpgAwesomeIconShield,
  rpgAwesomeIconShipEmblem,
  rpgAwesomeIconShoePrints,
  rpgAwesomeIconShotThroughTheHeart,
  rpgAwesomeIconShotgunShell,
  rpgAwesomeIconShovel,
  rpgAwesomeIconShuriken,
  rpgAwesomeIconSickle,
  rpgAwesomeIconSideswipe,
  rpgAwesomeIconSite,
  rpgAwesomeIconSkullTrophy,
  rpgAwesomeIconSkull,
  rpgAwesomeIconSlashRing,
  rpgAwesomeIconSmallFire,
  rpgAwesomeIconSnail,
  rpgAwesomeIconSnake,
  rpgAwesomeIconSnorkel,
  rpgAwesomeIconSnowflake,
  rpgAwesomeIconSoccerBall,
  rpgAwesomeIconSpadesCard,
  rpgAwesomeIconSpades,
  rpgAwesomeIconSpawnNode,
  rpgAwesomeIconSpearHead,
  rpgAwesomeIconSpeechBubble,
  rpgAwesomeIconSpeechBubbles,
  rpgAwesomeIconSpiderFace,
  rpgAwesomeIconSpikeball,
  rpgAwesomeIconSpikedMace,
  rpgAwesomeIconSpikedTentacle,
  rpgAwesomeIconSpinningSword,
  rpgAwesomeIconSpiralShell,
  rpgAwesomeIconSplash,
  rpgAwesomeIconSprayCan,
  rpgAwesomeIconSproutEmblem,
  rpgAwesomeIconSprout,
  rpgAwesomeIconStopwatch,
  rpgAwesomeIconSuckeredTentacle,
  rpgAwesomeIconSuits,
  rpgAwesomeIconSunSymbol,
  rpgAwesomeIconSun,
  rpgAwesomeIconSunbeams,
  rpgAwesomeIconSuperMushroom,
  rpgAwesomeIconSupersonicArrow,
  rpgAwesomeIconSurveillanceCamera,
  rpgAwesomeIconSyringe,
} from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-s',
  templateUrl: './icons-s.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsSComponent {
  icons = [
    rpgAwesomeIconSagittarius,
    rpgAwesomeIconSapphire,
    rpgAwesomeIconSatellite,
    rpgAwesomeIconSave,
    rpgAwesomeIconScorpio,
    rpgAwesomeIconScrollUnfurled,
    rpgAwesomeIconScythe,
    rpgAwesomeIconSeaSerpent,
    rpgAwesomeIconSeagull,
    rpgAwesomeIconShark,
    rpgAwesomeIconSheep,
    rpgAwesomeIconSheriff,
    rpgAwesomeIconShield,
    rpgAwesomeIconShipEmblem,
    rpgAwesomeIconShoePrints,
    rpgAwesomeIconShotThroughTheHeart,
    rpgAwesomeIconShotgunShell,
    rpgAwesomeIconShovel,
    rpgAwesomeIconShuriken,
    rpgAwesomeIconSickle,
    rpgAwesomeIconSideswipe,
    rpgAwesomeIconSite,
    rpgAwesomeIconSkullTrophy,
    rpgAwesomeIconSkull,
    rpgAwesomeIconSlashRing,
    rpgAwesomeIconSmallFire,
    rpgAwesomeIconSnail,
    rpgAwesomeIconSnake,
    rpgAwesomeIconSnorkel,
    rpgAwesomeIconSnowflake,
    rpgAwesomeIconSoccerBall,
    rpgAwesomeIconSpadesCard,
    rpgAwesomeIconSpades,
    rpgAwesomeIconSpawnNode,
    rpgAwesomeIconSpearHead,
    rpgAwesomeIconSpeechBubble,
    rpgAwesomeIconSpeechBubbles,
    rpgAwesomeIconSpiderFace,
    rpgAwesomeIconSpikeball,
    rpgAwesomeIconSpikedMace,
    rpgAwesomeIconSpikedTentacle,
    rpgAwesomeIconSpinningSword,
    rpgAwesomeIconSpiralShell,
    rpgAwesomeIconSplash,
    rpgAwesomeIconSprayCan,
    rpgAwesomeIconSproutEmblem,
    rpgAwesomeIconSprout,
    rpgAwesomeIconStopwatch,
    rpgAwesomeIconSuckeredTentacle,
    rpgAwesomeIconSuits,
    rpgAwesomeIconSunSymbol,
    rpgAwesomeIconSun,
    rpgAwesomeIconSunbeams,
    rpgAwesomeIconSuperMushroom,
    rpgAwesomeIconSupersonicArrow,
    rpgAwesomeIconSurveillanceCamera,
    rpgAwesomeIconSyringe,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
