import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'heroes/:id', component: HeroDetailComponent },

  // Ao utilizar Lazy-Load, não é necessário adicionar o nome da página
  { path: '', component: HeroesComponent },
  { path: ':id', component: HeroDetailComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
