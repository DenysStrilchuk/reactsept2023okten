import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null
}

const episodesSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {info: {prev, next}, results} = action.payload;
            state.episodes = results
            state.prevPage = prev
            state.nextPage = next
        }
    }
})

const {reducer:  episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions
}

export {
    episodesReducer,
    episodesActions
}