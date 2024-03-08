import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featuredItem = new EventEmitter<string>();

  directToRecipe(navigateTo: string) {
    this.featuredItem.emit(navigateTo);
  }
}