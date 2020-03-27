import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconJetpack,
  rpgAwesomeIconJigsawPiece,
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-j',
  templateUrl: './icons-j.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsJComponent {
  icons = [
    rpgAwesomeIconJetpack,
    rpgAwesomeIconJigsawPiece,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
