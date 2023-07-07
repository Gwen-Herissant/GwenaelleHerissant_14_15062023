/**
 * Generates Redux store
 * @returns store
 */

import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../features/employeeRegistration';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
