
import { Action } from "../ngrx-fake/ngrx";

const initialState = 10;

// reducers PRECISAM ser funções puras
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    case "DECREMENT":
      return (state -= 1);
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return state / action.payload;
    default:
      return state;
  }
}
