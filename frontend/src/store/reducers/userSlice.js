import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../api/UserApi";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        loginRequest(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }


});


export const { loginFailed, loginRequest, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;