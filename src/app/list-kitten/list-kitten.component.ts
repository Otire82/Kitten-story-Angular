import { Component, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.models';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  kittens: Kitten[];
  userKittens: Kitten[];
  // pour cacher une partie des infos jusqu'au survol avec la souris
  showInfo: boolean;

  constructor() {
    this.kittens = new Array();
    this.userKittens = new Array();
    this.showInfo = true;
  }

  addKitten(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  //Ajouter un chat
  adoptKitten(index: number) {
    const adoptedKittens = this.kittens.splice(index, 1);
    this.userKittens = this.userKittens.concat(adoptedKittens);
  }
  // Liste des chats en stock
  ngOnInit(): void {
    this.kittens.push(
      new Kitten(
        'Pattenrond',
        'Pottermania',
        '08/08/2001',
        'https://res.feednews.com/assets/v2/8a96cd8796d2c31688194f2873cc2fba?width=1280&height=720&quality=hq&category=us_News_Entertainment'
      ),
      new Kitten(
        'Garfield',
        'Bouftou',
        '31/12/2010',
        'https://www.pcgames.de/screenshots/1000x562/2015/04/garfield-widescreen1.jpg'
      ),
      new Kitten(
        'Poté',
        'Culotté',
        '28/01/1984',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mdrEYXwOiv6fN_0JL4jJ7aum4PMwKUQYoDuuWPmgRfFvU4co_q6okUxgY3OT0NZLV-E&usqp=CAU'
      ),
      new Kitten(
        'Snowbell',
        'Little',
        '05/08/2015',
        'https://www.petsonic.com/blog/wp-content/uploads/2018/08/stuart-little.jpg'
      ),
    );
  }
}