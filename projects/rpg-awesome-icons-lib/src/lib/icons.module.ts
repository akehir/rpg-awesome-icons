import { ModuleWithProviders, NgModule } from '@angular/core';
import { RpgAwesomeIconComponent } from './icon.component';
import { RpgAwesomeIconsRegistry } from './icons.registry';

@NgModule({
  declarations: [],
  imports: [RpgAwesomeIconComponent],
  exports: [RpgAwesomeIconComponent]
})
export class RpgAwesomeIconsModule {
  static forRoot(): ModuleWithProviders<RpgAwesomeIconsModule> {
    return {
      ngModule: RpgAwesomeIconsModule,
      providers: [
        RpgAwesomeIconsRegistry,
      ],
    };
  }
}
