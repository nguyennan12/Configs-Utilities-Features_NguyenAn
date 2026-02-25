// https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit'
import { ObjectReducer } from './user/ObjectSlice'

export const store = configureStore({
  reducer: {
    Object: ObjectReducer
  }
})