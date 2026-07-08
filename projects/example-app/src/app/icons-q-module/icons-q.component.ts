import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

import {
  rpgAwesomeIconQueenCrown,
  rpgAwesomeIconQuillInk,
} from "@triangular/rpg-awesome-icons/icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-q",
  templateUrl: "./icons-q.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class IconsQComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [rpgAwesomeIconQueenCrown, rpgAwesomeIconQuillInk];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
