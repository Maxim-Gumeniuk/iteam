import { configureStore } from '@reduxjs/toolkit';
import { FilteringSlice } from '../features/Filtering';
import { detailSlice } from '../features/gameDeatails';
import { gamesSlice } from '../features/games';
import { LikedGamesSlice } from '../features/likeGames';

export const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    details: detailSlice.reducer,
    likedGames: LikedGamesSlice.reducer,
    filtering: FilteringSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;