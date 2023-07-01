import { createSlice } from "@reduxjs/toolkit";

export const accountInfoSlice = createSlice({
    name: 'accountInfo',
    initialState: {
        accountInfo: {},
    },
    reducers: {
        setAccountInfo: (state, action) => {
            state.accountInfo = action.payload;
        },
    }
});

export const getAccountInfo = state => state.accountInfo.accountInfo;
export const { setAccountInfo } = accountInfoSlice.actions;
export default accountInfoSlice.reducer;

