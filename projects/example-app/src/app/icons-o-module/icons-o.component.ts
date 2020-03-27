import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconOcarina,
  rpgAwesomeIconOceanEmblem,
  rpgAwesomeIconOctopus,
  rpgAwesomeIconOmega,
  rpgAwesomeIconOnTarget,
  rpgAwesomeIconOphiuchus,
  rpgAwesomeIconOverhead,
  rpgAwesomeIconOvermind,
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-o',
  templateUrl: './icons-o.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsOComponent {
  icons = [
    rpgAwesomeIconOcarina,
    rpgAwesomeIconOceanEmblem,
    rpgAwesomeIconOctopus,
    rpgAwesomeIconOmega,
    rpgAwesomeIconOnTarget,
    rpgAwesomeIconOphiuchus,
    rpgAwesomeIconOverhead,
    rpgAwesomeIconOvermind,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
