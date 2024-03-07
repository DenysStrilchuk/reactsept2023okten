import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null
}

const getAll = createAsyncThunk(
    'episodesSlices/getAll',
    async (_,thunkAPI)  => {
        try {
            const {data} = await episodeService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

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
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
            })
})

const {reducer:  episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}