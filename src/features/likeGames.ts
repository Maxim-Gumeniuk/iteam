import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games } from '../types/games';

type likedGamesState = {
  likedGames: Games[],
}

const initialState: likedGamesState = {
  likedGames: [],
};

export const LikedGamesSlice = createSlice({
  name: 'likedGames',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<Games>) => {
      state.likedGames.push(action.payload);
      localStorage.setItem('likedGames', JSON.stringify(state.likedGames.map(item => item)));
    },

    removeGame: (state, action: PayloadAction<Games>) => {
      state.likedGames = state.likedGames.filter(item => item.appId !== action.payload.appId);
      localStorage.setItem('likedGames', JSON.stringify(state.likedGames.map(item => item)));
    },

    clearGames: (state) => {
      state.likedGames = [];
    }
  }
});

export default LikedGamesSlice.reducer;
export const { actions } = LikedGamesSlice;