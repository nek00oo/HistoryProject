import { configureStore } from '@reduxjs/toolkit';
import PageReducer from '../feature/page.store'

export const store = configureStore({
  reducer: {
    page: PageReducer,
  },
})