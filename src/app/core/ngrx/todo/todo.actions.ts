import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Add Todo': props<{ title: string, description: string }>(),
    'Update Todo': props<{ id: string, title: string, description: string }>(),
    'Remove Todo': props<{ id: string }>(),
    'Toggle Todo': props<{ id: string }>(),
    'Set Sort': props<{ sort: string }>(),
    'Set Filter': props<{ filter: string }>(),
    'Set SearchTerm': props<{ searchTerm: string }>(),
  },
});