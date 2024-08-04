import { TodoActions } from './todo.actions';

describe('TodoActions', () => {
  it('should create addTodo action', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const action = TodoActions.addTodo({ title, description });
    expect(action).toEqual({
      type: '[Todo] Add Todo',
      title,
      description,
    });
  });

  it('should create updateTodo action', () => {
    const id = '1';
    const title = 'Updated Title';
    const description = 'Updated Description';
    const action = TodoActions.updateTodo({ id, title, description });
    expect(action).toEqual({
      type: '[Todo] Update Todo',
      id,
      title,
      description,
    });
  });

  it('should create removeTodo action', () => {
    const id = '1';
    const action = TodoActions.removeTodo({ id });
    expect(action).toEqual({
      type: '[Todo] Remove Todo',
      id,
    });
  });

  it('should create toggleTodo action', () => {
    const id = '1';
    const action = TodoActions.toggleTodo({ id });
    expect(action).toEqual({
      type: '[Todo] Toggle Todo',
      id,
    });
  });

  it('should create setSort action', () => {
    const sort = 'Ascending';
    const action = TodoActions.setSort({ sort });
    expect(action).toEqual({
      type: '[Todo] Set Sort',
      sort,
    });
  });

  it('should create setFilter action', () => {
    const filter = 'Completed';
    const action = TodoActions.setFilter({ filter });
    expect(action).toEqual({
      type: '[Todo] Set Filter',
      filter,
    });
  });

  it('should create setSearchTerm action', () => {
    const searchTerm = 'Test';
    const action = TodoActions.setSearchTerm({ searchTerm });
    expect(action).toEqual({
      type: '[Todo] Set SearchTerm',
      searchTerm,
    });
  });
});
