import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';

import { rpgAwesomeIconXMark } from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-x',
  templateUrl: './icons-x.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class IconsXComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [rpgAwesomeIconXMark];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
