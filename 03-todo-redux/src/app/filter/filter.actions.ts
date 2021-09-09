import { createAction, props } from '@ngrx/store';

export type Filter = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: Filter }>()
);
