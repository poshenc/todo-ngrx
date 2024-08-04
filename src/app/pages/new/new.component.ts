import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { TodoActions } from '../../core/ngrx/todo/todo.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  store = inject(Store);
  router = inject(Router)

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  onSubmit() {
    const { title, description } = this.todoForm.value

    if (title && description) {
      this.store.dispatch(TodoActions.addTodo({ title, description }));
      this.router.navigate(['/']);
    }
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
