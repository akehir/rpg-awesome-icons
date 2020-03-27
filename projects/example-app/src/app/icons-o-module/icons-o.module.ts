import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsOComponent } from './icons-o.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsOComponent }
];

@NgModule({
  declarations: [IconsOComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RpgAwesomeIconsModule,
  ]
})
export class IconsOModule { }
