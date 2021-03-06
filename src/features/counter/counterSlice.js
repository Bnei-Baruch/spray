import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    test: '',
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setTest: (state, action) => {
      console.log('?!');
      state.test = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setTest} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  console.log('incrementAsync', amount);
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const fetchFromServer = () => dispatch => {
  console.log('fetchFromServer');
  fetch(`http://bbdev6.kbb1.com:4000/hello`, {
    headers: {'Content-Type': 'application/json'},
  }).then(results => results.json()).then(data => {
      console.log(data);
      dispatch(setTest(data.message));
  });
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export const selectTest = state => state.counter.test;

export default slice.reducer;
