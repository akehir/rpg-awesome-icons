import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

import {
  rpgAwesomeIconZebraShield,
  rpgAwesomeIconZigzagLeaf,
} from "@triangular/rpg-awesome-icons/icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-z",
  templateUrl: "./icons-z.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class IconsZComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [rpgAwesomeIconZebraShield, rpgAwesomeIconZigzagLeaf];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
