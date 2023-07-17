import { configureStore } from '@reduxjs/toolkit'
import { api } from './features/apiSlice'
import filterReducer from './features/filterSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath] : api.reducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

