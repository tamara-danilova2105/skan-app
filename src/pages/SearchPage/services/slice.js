import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        dataSearch: {},
        issueDateInterval: {},
        dataGistoframs: {},
        dataPublics: [],
    },
    reducers: {
        setDate: (state, action) => {
            state.dataSearch = action.payload;
        },
        setDateInterval: (state, action) => {
            state.issueDateInterval = action.payload;
        },
        saveDataGistograms: (state, action) => {
            state.dataGistoframs = action.payload;
        },
        saveDataPublics: (state, action) => {
            state.dataPublics = action.payload;
        }
    }
});

export const getDataSearch = state => state.search.dataSearch;
export const getDateInterval = state => state.search.issueDateInterval;
export const getDataGistorams = state => state.search.dataGistoframs;
export const getDataPublics = state => state.search.dataPublics;
export const { setDate, setDateInterval, saveDataGistograms, saveDataPublics } = searchSlice.actions;
export default searchSlice.reducer;