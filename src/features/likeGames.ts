import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games } from '../types/games';

type likedGamesState = {
  likedGames: string[],
  favouriteGame: Games[],
}

const initialState: likedGamesState = {
  likedGames: localStorage.getItem('likedGames')
    ? JSON.parse(localStorage.getItem('likedGames')
      || '') : [],
  favouriteGame: localStorage.getItem('favourite')
    ? JSON.parse(localStorage.getItem('favourite')
      || '')
        : [],
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
    },
    addFavouriteGame: (state, action: PayloadAction<Games>) => {
      const check = state.favouriteGame
        .find((game: Games) => +game.appId === +action.payload.appId);
      if (check) {
        return;
      }
      state.favouriteGame.push(action.payload);
      localStorage.setItem('favourite', JSON.stringify(state.favouriteGame));
    },
    removeFavouriteGame: (state, action: PayloadAction<Games>) => {
      const filtered = state.favouriteGame
        .filter(item => +item.appId !== +action.payload.appId);
      state.favouriteGame = filtered;
      localStorage.setItem('favourite', JSON.stringify(state.favouriteGame));
    },
    clearGamesFavourite: (state) => {
      state.favouriteGame = [];
    }
  }
});

export default LikedGamesSlice.reducer;
export const { actions } = LikedGamesSlice;