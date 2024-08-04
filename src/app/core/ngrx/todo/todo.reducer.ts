import { createReducer, on } from '@ngrx/store';
import { TodoActions } from './todo.actions';
import { Todo } from '../../models/todo.model';
import { dummyTodoData } from '../../dummy-data/todo-data';
import { generateRandomId } from '../../../shared/utils/utils';

export interface TodoState {
  todos: Todo[];
  sort: string;
  filter: string;
  searchTerm: string;
}

export const initialState: TodoState = {
  todos: dummyTodoData,
  sort: '',
  filter: '',
  searchTerm: '',
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { title, description }) => {
    const newTodo: Todo = {
      id: generateRandomId(),
      title,
      description,
      createdAt: new Date(),
      isCompleted: false
    }
    return {
      ...state,
      todos: [...state.todos, newTodo]
    }
  }),
  on(TodoActions.updateTodo, (state, { id, title, description }) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, title, description } : todo
    )
  })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(TodoActions.toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
  })),
  on(TodoActions.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm
  })),
  on(TodoActions.setSort, (state, { sort }) => ({
    ...state,
    sort
  })),
  on(TodoActions.setFilter, (state, { filter }) => ({
    ...state,
    filter
  })),
);