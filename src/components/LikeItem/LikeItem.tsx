import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { actions as LikedAction } from '../../features/likeGames';
import { Games } from '../../types/games';
import styles from './LikeItem.module.scss';

type Props = {
  item: Games;
}

export const LikeItem:React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const removeGame = (gameId: Games) => {
    dispatch(LikedAction.removeGame(gameId));
  }
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={item.imgUrl}
        alt="game"
      />
      <div className={styles.box}>
        <div className={styles.border}>
          <img
            className={styles.play}
            src={require('../../images/play-icon.png')} 
            alt="play" 
          />
        </div>
      </div>
    <div className={styles.body}>
      <p className={styles.title}>{item.title}</p>
      <p  className={styles.released}>{item.released}</p>
      <div className={styles.row}>
        <p>{item.price}</p>
        <div>
          <img
            className={styles.heart}
            src={require('../../images/red-heart.png')}
            alt="heart"
            onClick={() => removeGame(item)}
          />
        </div>
      </div>
    </div>
  </div>
  )
}