import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: null,
};

// Create the user slice
export const userDataSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export actions and reducer
export const { setUser } = userDataSlice.actions;
export default userDataSlice.reducer;
