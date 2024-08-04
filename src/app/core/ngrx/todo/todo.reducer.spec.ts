import { todoReducer, initialState, TodoState } from './todo.reducer';
import { TodoActions } from './todo.actions';
import { Todo } from '../../models/todo.model';

describe('Todo Reducer', () => {
  it('should add a todo', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const action = TodoActions.addTodo({ title, description });

    const newState = todoReducer(initialState, action);
    const arrLength = newState.todos.length

    expect(arrLength).toBe(initialState.todos.length + 1);
    expect(newState.todos[arrLength - 1].title).toBe(title);
    expect(newState.todos[arrLength - 1].description).toBe(description);
  });

  it('should update a todo', () => {
    const initialTodo: Todo = {
      id: '1',
      title: 'Initial Title',
      description: 'Initial Description',
      createdAt: new Date(),
      isCompleted: false,
    };

    const state: TodoState = {
      ...initialState,
      todos: [initialTodo],
    };

    const title = 'Updated Title';
    const description = 'Updated Description';
    const action = TodoActions.updateTodo({
      id: initialTodo.id,
      title,
      description,
    });

    const newState = todoReducer(state, action);
    expect(newState.todos[0].title).toBe(title);
    expect(newState.todos[0].description).toBe(description);
  });

  it('should remove a todo', () => {
    const initialTodo: Todo = {
      id: '1',
      title: 'Test Title',
      description: 'Test Description',
      createdAt: new Date(),
      isCompleted: false,
    };

    const state: TodoState = {
      ...initialState,
      todos: [initialTodo],
    };

    const action = TodoActions.removeTodo({ id: initialTodo.id });

    const newState = todoReducer(state, action);
    expect(newState.todos.length).toBe(0);
  });

  it('should toggle a todo', () => {
    const initialTodo: Todo = {
      id: '1',
      title: 'Test Title',
      description: 'Test Description',
      createdAt: new Date(),
      isCompleted: false,
    };

    const state: TodoState = {
      ...initialState,
      todos: [initialTodo],
    };

    const action = TodoActions.toggleTodo({ id: initialTodo.id });

    const newState = todoReducer(state, action);
    expect(newState.todos[0].isCompleted).toBe(true);
  });

  it('should set search term', () => {
    const searchTerm = 'New Search Term';
    const action = TodoActions.setSearchTerm({ searchTerm });

    const newState = todoReducer(initialState, action);
    expect(newState.searchTerm).toBe(searchTerm);
  });

  it('should set sort', () => {
    const sort = 'Ascending';
    const action = TodoActions.setSort({ sort });

    const newState = todoReducer(initialState, action);
    expect(newState.sort).toBe(sort);
  });

  it('should set filter', () => {
    const filter = 'Completed';
    const action = TodoActions.setFilter({ filter });

    const newState = todoReducer(initialState, action);
    expect(newState.filter).toBe(filter);
  });
});

