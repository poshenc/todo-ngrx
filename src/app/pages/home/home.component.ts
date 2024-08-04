import { Component, inject, signal } from '@angular/core';
import { ItemComponent } from '../../shared/components/item/item.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectFilter, selectOrganizedTodos, selectSearchTerm, selectSort } from '../../core/ngrx/todo/todo.selectors';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from '../../shared/components/drop-down/drop-down.component';
import { InputBoxComponent } from '../../shared/components/input-box/input-box.component';
import { TodoActions } from '../../core/ngrx/todo/todo.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemComponent, ButtonComponent, RouterLink, CommonModule, DropDownComponent, InputBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  store = inject(Store);
  todo$ = this.store.select(selectOrganizedTodos);

  sortOptions = ['Ascending', 'Descending'];
  filterOptions = ['All', 'Completed', 'Todo'];

  searchTerm: string = '';
  selectedSort: string = '';
  selectedFilter: string = '';

  constructor() {
    this.store.select(selectSearchTerm).subscribe(val => this.searchTerm = val);
    this.store.select(selectSort).subscribe(val => this.selectedSort = val);
    this.store.select(selectFilter).subscribe(val => this.selectedFilter = val);
  }

  handleSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.store.dispatch(TodoActions.setSearchTerm({ searchTerm }));
  }

  handleSortSelect(sort: string) {
    this.selectedSort = sort;
    this.store.dispatch(TodoActions.setSort({ sort }));
  }

  handleFilterSelect(filter: string) {
    this.selectedFilter = filter;
    this.store.dispatch(TodoActions.setFilter({ filter }));
  }

  handleToggle(id: string) {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }
}
