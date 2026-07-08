import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

import {
  rpgAwesomeIconWaterDrop,
  rpgAwesomeIconWifi,
  rpgAwesomeIconWirelessSignal,
  rpgAwesomeIconWolfHead,
  rpgAwesomeIconWolfHowl,
  rpgAwesomeIconWoodenSign,
  rpgAwesomeIconWrench,
  rpgAwesomeIconWyvern,
} from "@triangular/rpg-awesome-icons/icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-w",
  templateUrl: "./icons-w.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class IconsWComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconWaterDrop,
    rpgAwesomeIconWifi,
    rpgAwesomeIconWirelessSignal,
    rpgAwesomeIconWolfHead,
    rpgAwesomeIconWolfHowl,
    rpgAwesomeIconWoodenSign,
    rpgAwesomeIconWrench,
    rpgAwesomeIconWyvern,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
