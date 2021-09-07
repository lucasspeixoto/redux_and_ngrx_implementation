import {
  decrementerAction,
  divideAction,
  incrementerAction,
  multiplyAction,
  resetAction,
} from "./counter/counter.actions";
import { Action } from "./ngrx-fake/ngrx";

const initialState = 10;

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    case "DECREMENT":
      return (state -= 1);
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return state / action.payload;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}

console.log(reducer(initialState, incrementerAction));
console.log(reducer(initialState, decrementerAction));
console.log(reducer(initialState, multiplyAction));
console.log(reducer(initialState, divideAction));
console.log(reducer(initialState, resetAction));
