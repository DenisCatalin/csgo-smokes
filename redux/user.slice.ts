import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    data: {},
    logged: false,
    admin: false,
    mapSelected: "",
    nadeSelected: "",
    agentLooking: "left",
    selectedPosition: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState(state, action) {
      if (process.env.NODE_ENV !== 'production') {
        console.log("[REDUX-UPDATE] User: ", action.payload);
      }
      state.user = {
        ...action.payload,
      };
    },
  },
});

export const { setUserState } = userSlice.actions;
export const userReducer = userSlice.reducer;