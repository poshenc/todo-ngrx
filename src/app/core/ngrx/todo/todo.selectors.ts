import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectSearchTerm = createSelector(
  selectTodoState,
  (state: TodoState) => state.searchTerm
);

export const selectSort = createSelector(
  selectTodoState,
  (state: TodoState) => state.sort
);

export const selectFilter = createSelector(
  selectTodoState,
  (state: TodoState) => state.filter
);

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);

export const selectOrganizedTodos = createSelector(
  selectAllTodos,
  selectSort,
  selectFilter,
  selectSearchTerm,
  (todos, sort, filter, searchTerm) => {
    let organizedTodos = [...todos];

    if (filter) {
      organizedTodos = organizedTodos.filter(todo => {
        if (filter === 'Completed') {
          return todo.isCompleted;
        } else if (filter === 'Todo') {
          return !todo.isCompleted;
        }
        return true;
      });
    }

    if (searchTerm) {
      organizedTodos = organizedTodos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sort) {
      organizedTodos = organizedTodos.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        if (sort === 'Ascending') {
          return dateA - dateB;
        } else if (sort === 'Descending') {
          return dateB - dateA;
        }
        return 0;
      });
    }

    return organizedTodos;
  }
);

export const createTodoSelector = (id: string) => {
  return createSelector(selectTodoState, (state: TodoState) => {
    return state.todos.find(todo => todo.id === id);
  });
};
