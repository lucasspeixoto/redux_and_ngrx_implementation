import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, Filter } from './filter.actions';

export const initialState: Filter = 'all';

const _filterReducer = createReducer<Filter, Action>(
  initialState,
  on(setFilter, (state, props) => props.filter)
);
export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
