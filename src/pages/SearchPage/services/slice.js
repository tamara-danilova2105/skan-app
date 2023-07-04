import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        dataSearch: {},
        issueDateInterval: {},
        dataResult: {},
    },
    reducers: {
        setDate: (state, action) => {
            state.dataSearch = action.payload;
        },
        setDateInterval: (state, action) => {
            state.issueDateInterval = action.payload;
        },
        saveResult: (state, action) => {
            state.dataResult = action.payload;
        }
    }
});

export const getDataSearch = state => state.search.dataSearch;
export const getDateInterval = state => state.search.issueDateInterval;
export const getDataResult = state => state.search.dataResult;
export const { setDate, setDateInterval, saveResult } = searchSlice.actions;
export default searchSlice.reducer;