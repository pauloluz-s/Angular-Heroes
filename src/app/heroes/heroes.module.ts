import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';

const COMPONENTS = [
  HeroesComponent,
  HeroDetailComponent
]

const MODULES = [
  CommonModule,
  FormsModule,
  FlexLayoutModule,
  MaterialModule,
  //RouterModule,
  HeroesRoutingModule
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES]
})
export class HeroesModule { }
