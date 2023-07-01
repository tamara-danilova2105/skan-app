import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authStatus: false,
        token: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload;
        },
    }
});

export const getAuthStatus = state => state.auth.authStatus;
export const getToken = state => state.auth.token;
export const { setToken, setAuthStatus } = authSlice.actions;
export default authSlice.reducer;

