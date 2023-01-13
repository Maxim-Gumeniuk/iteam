import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllGames } from '../api/games';
import { Games } from '../types/games';

type GamesState = {
  games: Games[];
  loading: boolean;
  error: string;
  filter: Games[];
  id: number | null;
};

const initialState: GamesState = {
  games: [],
  loading: false,
  error: '',
  filter: [],
  id: null,
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    set: (state, action: PayloadAction<Games[]>) => {
      state.games = action.payload;
      state.filter = action.payload;
    },
    search: (state, action: PayloadAction<string>) => {
        state.filter = state.games.filter(game => game.title.toLowerCase() === action.payload.toLowerCase());
        if (action.payload.trim().length === 0) {
          state.filter = state.games;
        }
    },
    sortingByPrice: (state) => {
     state.filter = state.games.sort((a, b) =>(+parseInt(a.price) || 0) - (+parseInt(b.price) || 0))
    },
    sortingByPriceUp: (state) => {
      state.filter = state.games.sort((a, b) =>(+parseInt(b.price) || 0) - (+parseInt(a.price) || 0))
     },
     sortingByDateUp: (state) => {
      state.filter = state.games.sort((a, b) =>(Date.parse(b.released)) - (Date.parse(a.released)))
     },
     sortingByDateDown: (state) => {
      state.filter = state.games.sort((a, b) =>(Date.parse(a.released)) - (Date.parse(b.released)))
     },
    setId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.games = action.payload;
      state.filter = action.payload;
      state.loading = false;
    });

  builder.addCase(init.rejected, (state) => {
    state.loading = false;
    state.error = 'Error loading';
    });
  },
});

export default gamesSlice.reducer;

export const { actions } = gamesSlice;
export const init = createAsyncThunk('games/get', () => {
  return getAllGames();
});