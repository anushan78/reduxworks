const { createStore } = require('redux');

// initial state
const initialState = {
  age: 21
};

// reducer
const myReducer= (state = initialState, action) => {
  // create a copy of the state
  const newState = {...state}

  // check the action type and perform what is rquired
  if (action.type === 'ADD') {
    newState.age += action.val;
  }

  if (action.type === 'SUBTRACT') {
    newState.age -= action.val;
  }

  // return the new state
  return newState;
}

// initialize store with the reducer
const store = createStore(myReducer);

// Subscribe to the store
store.subscribe(() => {
  // console log the initial state
  console.log('state changed' + JSON.stringify(store.getState()));
});

// dispatch action to the store. This is action ADD. Ideally this should be in UI. This will change the state
// we can pass type and payload
store.dispatch({ type: 'ADD', val: 10 });
// dispatch SUBTRACT action
store.dispatch({ type: 'SUBTRACT', val: 5 });
