import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
  rpgAwesomeIconQueenCrown,
  rpgAwesomeIconQuillInk,
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-q',
  templateUrl: './icons-q.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsQComponent {
  icons = [
    rpgAwesomeIconQueenCrown,
    rpgAwesomeIconQuillInk,
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
