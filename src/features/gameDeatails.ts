import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games } from '../types/games';
import { getDetails } from '../api/gamesById';

type detailState = {
  details: Games | null;
  loading: boolean;
  error: string;
};

const initialState: detailState = {
  details: null,
  loading: false,
  error: '',
};

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    set: (state, action: PayloadAction<Games>) => {
      state.details = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(initDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.loading = false;
    });

    builder.addCase(initDetails.rejected, (state) => {
      state.loading = false;
      state.error = 'Error loading';
    });
  },
});

export default detailSlice.reducer;

export const initDetails = createAsyncThunk('detail/get', (param: number) => {
  return getDetails(param);
});
