import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  currentObject: null
}

export const ObjectSlice = createSlice({
  name: 'Object',
  initialState,
  //xu ly dong bo
  reducers: {
    //reducer
  },
  //xu ly bat dong bo
  extraReducers: (builder) => {
    //reducer
  }
})

// Action: nơi chứa các hàm reducer để các component gọi lại băng dispath() lấy data
export const { increment, decrement, incrementByAmount } = ObjectSlice.actions

//Selector: nơi để các component gọi bằng ueSelector lấy dữ liệu đã cập nhất trong state Redux ra sử dụng
export const selectCurrentObject = (state) => {
  return state.ObjectSlice.currentObject
}

export const ObjectReducer = ObjectSlice.reducer