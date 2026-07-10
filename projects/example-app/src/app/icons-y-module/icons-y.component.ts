import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RpgAwesomeIconsRegistry } from '@triangular/rpg-awesome-icons';
import { RpgAwesomeIcon } from '@triangular/rpg-awesome-icons/icons';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'app-icons-y',
  templateUrl: './icons-y.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class IconsYComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons: RpgAwesomeIcon[] = [];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
