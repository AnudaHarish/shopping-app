import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Ingredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName', { static: true }) ingredient: ElementRef;
  @ViewChild('ingredientAmount', { static: true }) amount: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngredients() {
    this.newIngredient.emit({ name: this.ingredient.nativeElement.value, amount: this.amount.nativeElement.value });
  }
}
