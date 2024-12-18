import { configureStore, createSlice } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: null
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
  }
})

export default configureStore({
  reducer: {
    'auth': userReducer,
    'location' : locationSlice.reducer
  },
})



export const {setLocation} = locationSlice.actions;