import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private HeroService: HeroService,
    private messageService: MessageService,
    ){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeros().subscribe(heroes => this.heroes = heroes);

    // this.HeroService.getHeros().subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });

    // this.HeroService.getHeros().subscribe(
    //   (value) => console.log(value),
    //   (err) => console.log(err),
    //   () => console.log("Agora foi normalmente concluído")
    // );

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //this.messageService.add("HerosComponent: Select hero id="+hero.id);
    this.messageService.add(`HerosComponent: Select hero id=${hero.id}`);
  }
}
