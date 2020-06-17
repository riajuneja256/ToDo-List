import { createStore} from 'redux';
import { ourReducer } from './reducers/reducer';

// store.js

export function configureStore(initialState = ourReducer) {
  const store = createStore(ourReducer);
  return store;
};

export const store = configureStore();