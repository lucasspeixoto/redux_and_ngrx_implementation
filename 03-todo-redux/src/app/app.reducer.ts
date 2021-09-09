import { ActionReducerMap } from '@ngrx/store';
import { Filter } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[];
  filter: Filter
}


export const reducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}


