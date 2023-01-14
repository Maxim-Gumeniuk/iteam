import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games } from '../types/games';

type likedGamesState = {
  likedGames: string[],
}

const initialState: likedGamesState = {
  likedGames: localStorage.getItem('likedGames') ? JSON.parse(localStorage.getItem('likedGames') || '') : [],
};

export const LikedGamesSlice = createSlice({
  name: 'likedGames',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<Games>) => {
      state.likedGames.push(action.payload.appId);
      localStorage.setItem('likedGames', JSON.stringify(state.likedGames));
    },
    removeGame: (state, action: PayloadAction<Games>) => {
      const filtered = state.likedGames.filter(item => item !== action.payload.appId);
      state.likedGames = filtered;
      localStorage.setItem('likedGames', JSON.stringify(state.likedGames));
    },
    clearGames: (state) => {
      state.likedGames = [];
    }
  }
});

export default LikedGamesSlice.reducer;
export const { actions } = LikedGamesSlice;