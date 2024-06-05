import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currentPage: 'main',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    goTo: (state, action) => {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
  }
})

export const { goTo } = pageSlice.actions;
export default pageSlice.reducer;