import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/productRedux'

const store = configureStore({
  reducer: {
    reducer: productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store