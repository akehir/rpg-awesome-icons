import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  RpgAwesomeIconComponent,
  RpgAwesomeIconsRegistry,
} from "@triangular/rpg-awesome-icons";

import {
  rpgAwesomeIconAcid,
  rpgAwesomeIconAcorn,
  rpgAwesomeIconAlienFire,
  rpgAwesomeIconAllForOne,
  rpgAwesomeIconAlligatorClip,
  rpgAwesomeIconAmmoBag,
  rpgAwesomeIconAnchor,
  rpgAwesomeIconAngelWings,
  rpgAwesomeIconAnkh,
  rpgAwesomeIconAnvil,
  rpgAwesomeIconApple,
  rpgAwesomeIconAquarius,
  rpgAwesomeIconArcaneMask,
  rpgAwesomeIconArcher,
  rpgAwesomeIconArcheryTarget,
  rpgAwesomeIconArena,
  rpgAwesomeIconAries,
  rpgAwesomeIconArrowCluster,
  rpgAwesomeIconArrowFlights,
  rpgAwesomeIconArson,
  rpgAwesomeIconAura,
  rpgAwesomeIconAware,
  rpgAwesomeIconAxeSwing,
  rpgAwesomeIconAxe,
} from "@triangular/rpg-awesome-icons/icons";

@Component({
  selector: "app-icons-a",
  templateUrl: "./icons-a.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RpgAwesomeIconComponent],
})
export class IconsAComponent {
  private registry = inject(RpgAwesomeIconsRegistry);

  icons = [
    rpgAwesomeIconAcid,
    rpgAwesomeIconAcorn,
    rpgAwesomeIconAlienFire,
    rpgAwesomeIconAllForOne,
    rpgAwesomeIconAlligatorClip,
    rpgAwesomeIconAmmoBag,
    rpgAwesomeIconAnchor,
    rpgAwesomeIconAngelWings,
    rpgAwesomeIconAnkh,
    rpgAwesomeIconAnvil,
    rpgAwesomeIconApple,
    rpgAwesomeIconAquarius,
    rpgAwesomeIconArcaneMask,
    rpgAwesomeIconArcher,
    rpgAwesomeIconArcheryTarget,
    rpgAwesomeIconArena,
    rpgAwesomeIconAries,
    rpgAwesomeIconArrowCluster,
    rpgAwesomeIconArrowFlights,
    rpgAwesomeIconArson,
    rpgAwesomeIconAura,
    rpgAwesomeIconAware,
    rpgAwesomeIconAxeSwing,
    rpgAwesomeIconAxe,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
