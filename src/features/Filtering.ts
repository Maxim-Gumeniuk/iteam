import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type filteringState = {
  query: string,
};

const initialState: filteringState = {
  query: '',
};

export const FilteringSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  }
});

export default FilteringSlice.reducer;
export const { actions } = FilteringSlice;