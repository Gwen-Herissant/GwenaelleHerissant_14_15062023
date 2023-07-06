import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../features/employeeRegistration';

/**
 * Generates Redux store
 * @returns store
 */

export default configureStore({
  reducer: {
    form: formReducer,
  }
});