import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  constructor() { }

  ngOnInit(): void {
    this.ingredients = [new Ingredients("Apple", "10"), new Ingredients("Orange", "20")]
  }
}
