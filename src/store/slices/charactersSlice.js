import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: []
};

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const { results } = action.payload;
            state.characters = results;
        }
    }
});

const { reducer: charactersReducer, actions } = charactersSlice;
const charactersActions = {
    ...actions
}

export {
    charactersReducer,
    charactersActions
};