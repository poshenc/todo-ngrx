import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { RouterLink } from '@angular/router';
import { Todo } from '../../../core/models/todo.model';
import { Store } from '@ngrx/store';
import { TodoActions } from '../../../core/ngrx/todo/todo.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ButtonComponent, ToggleComponent, RouterLink, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({ required: true }) todo: Todo = {} as Todo;

  store = inject(Store);


  onToggle() {
    this.store.dispatch(TodoActions.toggleTodo({ id: this.todo.id }));
  }
}
