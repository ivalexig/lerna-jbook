import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ActionType } from './action-types';
import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// Reducer testing
// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });

// console.log(store.getState());
