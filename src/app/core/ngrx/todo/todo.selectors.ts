import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { Todo } from '../../models/todo.model';

export const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  (todos) => todos.filter(todo => todo.isCompleted)
);

export const createTodoSelector = (id: string) => {
  return createSelector(selectTodoState, (state: TodoState) => {
    return state.todos.find(todo => todo.id === id);
  });
};
