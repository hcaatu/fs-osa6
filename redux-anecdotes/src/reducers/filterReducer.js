import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    newFilter(state, action) {
      return action.payload
    }
  }
})

export const { newFilter } = filterSlice.actions
export default filterSlice.reducer