import { createStore, Store } from "redux";
import { incrementerAction } from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";

const store: Store = createStore(counterReducer);

store.subscribe(() => {
  console.log("Subs: ", store.getState());
});

store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
store.dispatch(incrementerAction);
