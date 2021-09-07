// Actions

interface Action {
  type: string;
  payload?: any;
}

const initialState = 10;

// reducers PRECISAM ser funções puras
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
    default:
      return state;
  }
}

const incrementerAction: Action = {
  type: "INCREMENT",
};

const decrementerAction: Action = {
  type: "DECREMENT",
};

const multiplyAction: Action = {
  type: "MULTIPLY",
  payload: 3,
};

const divideAction: Action = {
  type: "DIVIDE",
  payload: 2,
};

console.log(reducer(initialState, incrementerAction));
console.log(reducer(initialState, decrementerAction));
console.log(reducer(initialState, multiplyAction));
console.log(reducer(initialState, divideAction));
