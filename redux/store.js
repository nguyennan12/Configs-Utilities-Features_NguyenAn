// https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit'
import { ObjectReducer } from './Object/ObjectSlice'


import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//cau hinh persist
/*********************************************************************/
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['Object']
}

//combine cac reduer trong project
const reducers = combineReducers({
  activeBoard: activeBoardReducer,
  Object: ObjectReducer
})

//perssist reducer
const persistedReducer = persistReducer(rootPersistConfig, reducers)
/*********************************************************************/
export const store = configureStore({
  reducer: {
    Object: ObjectReducer
  }
  //reducer: persistedReducer
})