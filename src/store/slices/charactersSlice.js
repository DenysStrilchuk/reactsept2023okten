import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: []
};

const getById = createAsyncThunk(
    'charactersSlice/getById',
    async ({id},thunkAPI) => {
            try {
                const {data} = await characterService.getById(id)
                return data
            }catch (e) {
                return thunkAPI.rejectWithValue(e.response.data)
            }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled, (state, action) => {
                state.characters = action.payload
            })
});

const { reducer: charactersReducer, actions } = charactersSlice;
const charactersActions = {
    ...actions,
    getById
}

export {
    charactersReducer,
    charactersActions
};