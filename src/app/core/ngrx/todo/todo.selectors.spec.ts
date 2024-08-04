import { selectTodoState, selectAllTodos, selectOrganizedTodos, selectSort, selectFilter, selectSearchTerm } from './todo.selectors';
import { TodoState } from './todo.reducer';

describe('Todo Selectors', () => {
  const initialState: TodoState = {
    todos: [
      { id: '1', title: 'Test Todo 1', description: 'Description 1', createdAt: new Date('2023-01-01'), isCompleted: false },
      { id: '2', title: 'Test Todo 2', description: 'Description 2', createdAt: new Date('2023-01-02'), isCompleted: true },
    ],
    sort: '',
    filter: '',
    searchTerm: '',
  };

  it('should select the todo state', () => {
    const result = selectTodoState.projector(initialState);
    expect(result).toBe(initialState);
  });

  it('should select all todos', () => {
    const result = selectAllTodos.projector(initialState);
    expect(result).toEqual(initialState.todos);
  });

  it('should select the sort', () => {
    const result = selectSort.projector(initialState);
    expect(result).toBe(initialState.sort);
  });

  it('should select the filter', () => {
    const result = selectFilter.projector(initialState);
    expect(result).toBe(initialState.filter);
  });

  it('should select the search term', () => {
    const result = selectSearchTerm.projector(initialState);
    expect(result).toBe(initialState.searchTerm);
  });

  it('should select organized todos with filter', () => {
    const state = {
      ...initialState,
      filter: 'Completed'
    };
    const result = selectOrganizedTodos.projector(state.todos, state.sort, state.filter, state.searchTerm);
    expect(result).toEqual([initialState.todos[1]]);
  });

  it('should select organized todos with search term', () => {
    const state = {
      ...initialState,
      searchTerm: '1'
    };
    const result = selectOrganizedTodos.projector(state.todos, state.sort, state.filter, state.searchTerm);
    expect(result).toEqual([initialState.todos[0]]);
  });

  it('should select organized todos with sort ascending', () => {
    const state = {
      ...initialState,
      sort: 'Ascending'
    };
    const result = selectOrganizedTodos.projector(state.todos, state.sort, state.filter, state.searchTerm);
    expect(result).toEqual([initialState.todos[0], initialState.todos[1]]);
  });

  it('should select organized todos with sort descending', () => {
    const state = {
      ...initialState,
      sort: 'Descending'
    };
    const result = selectOrganizedTodos.projector(state.todos, state.sort, state.filter, state.searchTerm);
    expect(result).toEqual([initialState.todos[1], initialState.todos[0]]);
  });
});
