import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsKComponent } from './icons-k.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsKComponent }
];

@NgModule({
  declarations: [IconsKComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RpgAwesomeIconsModule,
  ]
})
export class IconsKModule { }
