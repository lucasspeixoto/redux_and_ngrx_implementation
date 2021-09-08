import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  multiply,
  divide,
  reset,
} from './counter.actions';

export const initialState = 10;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, props) => state * props.number),
  on(divide, (state, props) => state / props.number),
  on(reset, () => initialState)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

/* export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }
} */
