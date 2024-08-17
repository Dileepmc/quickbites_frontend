import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
     user: null
  },
  reducers: {
    adduser: (state, action) => {
        state.user = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { adduser  } = AuthSlice.actions

export default AuthSlice.reducer