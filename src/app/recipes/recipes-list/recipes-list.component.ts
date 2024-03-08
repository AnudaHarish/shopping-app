import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() itemSelected = new EventEmitter<Recipe>()
  recipe: Recipe[] = [new Recipe('chicken curry', 'sample food item description', './assets/curry.jpeg'),
  new Recipe('chicken curry', 'sample food item description', './assets/curry.jpeg')]
  constructor() { }

  ngOnInit(): void {
  }

  getSelectedRecipe(item) {
    this.itemSelected.emit(item);
  }
}
