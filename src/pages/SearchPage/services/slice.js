import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        dataSearch: {},
        issueDateInterval: {},
    },
    reducers: {
        setDate: (state, action) => {
            state.dataSearch = action.payload;
        },
        setDateInterval: (state, action) => {
            state.issueDateInterval = action.payload;
        },
    }
});

export const getDataSearch = state => state.search.dataSearch;
export const getDateInterval = state => state.search.issueDateInterval;
export const { setDate, setDateInterval } = searchSlice.actions;
export default searchSlice.reducer;