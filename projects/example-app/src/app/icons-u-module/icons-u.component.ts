import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

import {
  rpgAwesomeIconUncertainty,
  rpgAwesomeIconUnderhand,
  rpgAwesomeIconUnplugged,
} from "@triangular/rpg-awesome-icons/icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-u",
  templateUrl: "./icons-u.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class IconsUComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconUncertainty,
    rpgAwesomeIconUnderhand,
    rpgAwesomeIconUnplugged,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
