import { Component, inject, signal } from '@angular/core';
import { ItemComponent } from '../../shared/components/item/item.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllTodos } from '../../core/ngrx/todo/todo.selectors';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from '../../shared/components/drop-down/drop-down.component';
import { InputBoxComponent } from '../../shared/components/input-box/input-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemComponent, ButtonComponent, RouterLink, CommonModule, DropDownComponent, InputBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  store = inject(Store);
  todo$ = this.store.select(selectAllTodos);

  sortOptions = ['Ascending', 'Descending'];
  filterOptions = ['All', 'Completed', 'Todo'];
  searchTerm: string = '';

  handleSearchChange(newValue: string) {
    this.searchTerm = newValue;
    console.log(this.searchTerm);
  }

  handleSortSelect(selectedSort: string) {
    console.log('Selected option:', selectedSort);
  }

  handleFilterSelect(selectedFilter: string) {
    console.log('Selected option:', selectedFilter);
  }
}
