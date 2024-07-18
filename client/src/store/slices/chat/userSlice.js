import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedUserToChat: null,
    messages: [],
  },

  reducers: {
    setUserToChat: (state, action) => {
      state.selectedUserToChat = action.payload;
    },
    clearUser: (state) => {
      state.selectedUserToChat = null;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setUserToChat, clearUser, setMessages } = userSlice.actions;

export default userSlice.reducer;
