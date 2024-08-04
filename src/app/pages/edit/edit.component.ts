import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ToggleComponent } from '../../shared/components/toggle/toggle.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { createTodoSelector } from '../../core/ngrx/todo/todo.selectors';
import { Observable, of } from 'rxjs';
import { Todo } from '../../core/models/todo.model';
import { TodoActions } from '../../core/ngrx/todo/todo.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, CommonModule, ToggleComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)
  store = inject(Store);
  todo$: Observable<Todo | undefined> = of(undefined);

  currentId: string = "";
  isCompleted: boolean = false;

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.currentId = id
        this.getTodoById(id);
      }
    });
  }

  getTodoById(id: string) {
    this.todo$ = this.store.pipe(select(createTodoSelector(id)));
    this.todo$.pipe(takeUntilDestroyed()).subscribe(todo => {
      if (todo) {
        this.todoForm.patchValue({
          title: todo.title,
          description: todo.description,
        });
        this.isCompleted = todo.isCompleted
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    const { title, description } = this.todoForm.value

    if (title && description) {
      this.store.dispatch(TodoActions.updateTodo({
        id: this.currentId,
        title,
        description
      }));
      this.router.navigate(['/']);
    }
  }

  onDelete() {
    this.store.dispatch(TodoActions.removeTodo({ id: this.currentId }));
  }

  onToggle() {
    this.store.dispatch(TodoActions.toggleTodo({ id: this.currentId }));
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
