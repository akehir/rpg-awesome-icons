import { ModuleWithProviders, NgModule } from '@angular/core';
import { RpgAwesomeIconComponent } from './icon.component';
import { RpgAwesomeIconsRegistry } from './icons.registry';

@NgModule({
  declarations: [RpgAwesomeIconComponent],
  imports: [],
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
