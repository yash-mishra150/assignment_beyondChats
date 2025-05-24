import { configureStore } from '@reduxjs/toolkit'
import currentSelectorReducer from './slices/currentSelector'

export const store = configureStore({
  reducer: {
    currentSelector: currentSelectorReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
