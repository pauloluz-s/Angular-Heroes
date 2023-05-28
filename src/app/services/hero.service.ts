import { Injectable } from '@angular/core';

import { HEROES } from '../mocks/mock-heroes'
import { Hero } from '../interfaces/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ){}

  getHeros(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
