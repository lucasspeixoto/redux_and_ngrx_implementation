import { incrementerAction, multiplyAction } from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

// Criando na mão uma store
class Store<T> {
  //private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {
    //this.state = state;
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(counterReducer, 10);

console.log(store.getState());

store.dispatch(incrementerAction)

console.log(store.getState());

store.dispatch(multiplyAction)

console.log(store.getState());