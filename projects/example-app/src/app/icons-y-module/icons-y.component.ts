import { Component, ViewEncapsulation } from '@angular/core';
import { RpgAwesomeIconsRegistry, } from '@triangular/rpg-awesome-icons';

import {
} from '@triangular/rpg-awesome-icons/icons';

@Component({
  selector: 'app-icons-y',
  templateUrl: './icons-y.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsYComponent {
  icons = [
  ];

  constructor(private registry: RpgAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
