import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent},

  // Ao utilizar Lazy-Load, não é necessário adicionar o nome da página
  { path: '', component: DashboardComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
