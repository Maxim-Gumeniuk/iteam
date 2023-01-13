import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as LikedGamesActions } from '../../features/likeGames';
import { Games } from '../../types/games';
import { LikeItem } from '../LikeItem/LikeItem';
import styles from './LikeList.module.scss';

export const LikeList = () => {
const { likedGames } = useAppSelector(state => state.likedGames)
const dispatch = useAppDispatch();


const clearAll = () => {
  dispatch(LikedGamesActions.clearGames());
  localStorage.clear()
}

  return (
    <>
      <Link to='/' className={styles.back}>Back</Link>
      <p className={styles.clear} onClick={() => clearAll()}>Clear all</p>
      <ul className={styles.row}>
        {likedGames.map((item: Games) => (
          <li key={item.appId} className={styles.item}><LikeItem item={item}/></li>
        ))}
      </ul>
    </>
  )
}