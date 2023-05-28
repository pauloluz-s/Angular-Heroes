import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

const COMPONENTS = [
  DashboardComponent
]

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  //RouterModule,
  DashboardRoutingModule
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES]
})
export class DashboardModule { }
