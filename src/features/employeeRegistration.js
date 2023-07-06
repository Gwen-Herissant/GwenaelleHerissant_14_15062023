import { createSlice } from '@reduxjs/toolkit';

/**
 * Generates slice for handling the form data
 * @returns site's routes
 */

const formSlice = createSlice({
  name: 'form',
  initialState: [],
  reducers: {
    registerFormValues: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { registerFormValues } = formSlice.actions;
export default formSlice.reducer;