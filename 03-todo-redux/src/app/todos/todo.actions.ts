import { createAction, props } from '@ngrx/store';

export const CREATE_TODO = '[Todo] Create todo';
export const EDIT_TODO = '[Todo] Edit todo';
export const DELETE_TODO = '[Todo] Delete todo';
export const TOGGLE_TODO = '[Todo] Toggle todo';
export const TOGGLE_ALL_TODO = '[Todo] Toggle All';
export const CLEAR_COMPLETED = '[Todo] Clear All Completed';

export const create = createAction(CREATE_TODO, props<{ text: string }>());

export const toggle = createAction(TOGGLE_TODO, props<{ id: number }>());

export const edit = createAction(
  EDIT_TODO,
  props<{ id: number; text: string }>()
);

export const del = createAction(DELETE_TODO, props<{ id: number }>());

export const toggleAllTodos = createAction(
  TOGGLE_ALL_TODO,
  props<{ completed: boolean }>()
);

export const clearCompleted = createAction(CLEAR_COMPLETED)
/* export class CreateTodo implements Action {
  readonly type = CREATE_TODO;

  constructor(public payload: string) {}
}

export type TodoActions = CreateTodo;
*/
