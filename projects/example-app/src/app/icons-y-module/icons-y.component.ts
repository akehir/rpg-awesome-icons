import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RpgAwesomeIconsRegistry } from "@triangular/rpg-awesome-icons";

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: "app-icons-y",
  templateUrl: "./icons-y.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class IconsYComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
