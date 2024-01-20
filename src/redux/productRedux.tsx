import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store/store';

export const productSlice = createSlice({
  name: 'data',
  initialState: {
    productData: [],
    filteredData: [],
  },
  reducers: {
    setData: (state, action) => {
      state.productData = action.payload
    },

    setFilterData: (state, action) => {
      state.filteredData = action.payload
    },
  },
})

export const { setData, setFilterData } = productSlice.actions;
export const productData = (state: RootState) => state.reducer.productData;
export const filteredData = (state: RootState) => state.reducer.filteredData;
export default productSlice.reducer