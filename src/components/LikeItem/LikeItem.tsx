import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { actions as LikedAction } from '../../features/likeGames';
import { Games } from '../../types/games';
import styles from './LikeItem.module.scss';
import { actions as IdAction} from '../../features/games';

type Props = {
  item: Games;
}

export const LikeItem:React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const addId = (param: number) => {
    dispatch(IdAction.setId(param));
  }

  const removeGame = (gameId: Games, event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(LikedAction.removeGame(gameId));
  }
  return (
    <div className={styles.card}>
      <Link to='/details' onClick={() => addId(+item.appId)}>
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
            onClick={(e) => removeGame(item, e)}
          />
        </div>
      </div>
    </div>
    </Link>
  </div>
  )
}