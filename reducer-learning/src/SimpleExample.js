// import './App.css';
// import { useReducer } from 'react';

// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement',
// };

// function reducer(state, action) {
//   if (!action) return state;

//   if (action.type === ACTIONS.INCREMENT) {
//     return { count: state.count + 1 };
//   }

//   if (action.type === ACTIONS.DECREMENT) {
//     return { count: state.count - 1 };
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   function incrementHandler() {
//     dispatch({ type: ACTIONS.INCREMENT });
//   }

//   function decrementHandler() {
//     dispatch({ type: ACTIONS.DECREMENT });
//   }

//   return (
//     <div className="App">
//       <button onClick={decrementHandler}>-</button>
//       <h1>{state.count}</h1>
//       <button onClick={incrementHandler}>+</button>
//     </div>
//   );
// }

// export default App;
