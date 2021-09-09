import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  clearCompleted,
  create,
  del,
  edit,
  toggle,
  toggleAllTodos,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Treinar'),
  new Todo('Levar Liana'),
  new Todo('Estudar'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, props) => [...state, new Todo(props.text)]),
  on(toggle, (state, props) => {
    return state.map((todo) => {
      if (todo.id === props.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, props) => {
    return state.map((todo) => {
      if (todo.id === props.id) {
        return {
          ...todo,
          text: props.text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(del, (state, props) => {
    return state.filter((todo) => todo.id != props.id);
  }),
  on(toggleAllTodos, (state, props) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed: props.completed,
      };
    });
  }),
  on(clearCompleted, (state) => {
    return state.filter((todo) => !todo.completed);
  })
);

export function todoReducer(state: Todo[], action: Action) {
  return _todoReducer(state, action);
}
