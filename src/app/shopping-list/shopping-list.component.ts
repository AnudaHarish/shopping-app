import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  ingretient: Ingredients;
  constructor() { }

  ngOnInit(): void {
    this.ingredients = [new Ingredients("Apple", "10"), new Ingredients("Orange", "20")]
  }

  addIngredient(item) {
    this.ingredients.push(item);
    console.log("🚀 ~ ShoppingListComponent ~ addIngredient ~ this.ingredients:", item)
  }
}
