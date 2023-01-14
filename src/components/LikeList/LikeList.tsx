import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as LikedGamesActions } from '../../features/likeGames';
import { Games } from '../../types/games';
import { LikeItem } from '../LikeItem/LikeItem';
import styles from './LikeList.module.scss';

export const LikeList = () => {
const [favourite, setFavourite] = useState<Games[]>([]);
const { likedGames } = useAppSelector(state => state.likedGames)
const { games } = useAppSelector(state => state.games)
const dispatch = useAppDispatch();

const clearAll = () => {
  dispatch(LikedGamesActions.clearGames());
  localStorage.clear()
}

console.log(likedGames)
useEffect(() => {
  const filterdGames = games.filter((game: Games) => likedGames.find((item: string) => game.appId === item));
  setFavourite(filterdGames);
},[likedGames])

  return (
    <>
      <Link to='/' className={styles.back}>Back</Link>
      <p className={styles.clear} onClick={() => clearAll()}>Clear all</p>
      <ul className={styles.row}>
        {favourite.map((item: Games) => (
          <li key={item.appId} className={styles.item}><LikeItem item={item}/></li>
        ))}
      </ul>
    </>
  )
}