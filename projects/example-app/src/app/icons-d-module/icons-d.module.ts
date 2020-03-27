import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsDComponent } from './icons-d.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsDComponent }
];

@NgModule({
  declarations: [IconsDComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RpgAwesomeIconsModule,
  ]
})
export class IconsDModule { }
