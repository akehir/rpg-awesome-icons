import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsCComponent } from './icons-c.component';
import { RpgAwesomeIconsModule } from '@triangular/rpg-awesome-icons';

const routes: Routes = [
  { path: '', component: IconsCComponent }
];

@NgModule({
  declarations: [IconsCComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RpgAwesomeIconsModule,
  ]
})
export class IconsCModule { }
