import { createSlice } from "@reduxjs/toolkit";

export interface UserModel {
  id: number;
  name: string;
  lastname: string;
}
const initialState: UserModel[] = [];

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUsers: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
export type State = ReturnType<typeof addUsers>;
