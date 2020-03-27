import { Injectable } from '@angular/core';
import { RpgAwesomeIcon } from './icons';

@Injectable({
  providedIn: 'root'
})
export class RpgAwesomeIconsRegistry {

  private registry = new Map<string, string>();

  public registerIcons(icons: RpgAwesomeIcon[]): void {
    icons.forEach((icon: RpgAwesomeIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
