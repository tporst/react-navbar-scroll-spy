import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'config',
  
  initialState: {
    cmpPositions: {}
  },
  
  reducers: {
    setComptPositions: (state, action) => {    
      state.cmpPositions = {...state.cmpPositions, ...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setComptPositions } = configSlice.actions

export default configSlice.reducer