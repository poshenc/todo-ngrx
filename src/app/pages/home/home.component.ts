import { Component, inject } from '@angular/core';
import { ItemComponent } from '../../shared/components/item/item.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllTodos } from '../../core/ngrx/todo/todo.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemComponent, ButtonComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  store = inject(Store);
  todo$ = this.store.select(selectAllTodos);
}
