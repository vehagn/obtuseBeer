import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.sass'],
})
export class BeerListComponent {
  beerList = [
    {
      brand: 'Dahls',
      score: 10,
    },
    {
      brand: 'Tuborg',
      score: 0,
    },
    {
      brand: 'Hansa',
      score: 5,
    },
  ];

  constructor() {}
}
