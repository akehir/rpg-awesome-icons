import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsXComponent } from './icons-x.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsXComponent }
];

@NgModule({
  declarations: [IconsXComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RpgAwesomeIconsModule,
  ]
})
export class IconsDModule { }
