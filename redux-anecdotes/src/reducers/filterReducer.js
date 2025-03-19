import { createSlice } from "@reduxjs/toolkit"

/*
const filterRecuder = (state = '', action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export const filterHandler = filter => {
  return {
    type: 'SET_FILTER',
    payload: filter
  }
}
*/

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