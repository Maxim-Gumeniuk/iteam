import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as IdAction} from '../../features/games';
import { actions as LikedActions } from '../../features/likeGames';
import { Games } from '../../types/games';
import styles from './game.module.scss';

type Props = {
  game: Games
}

export const Game: React.FC<Props> = ({ game }) => {
  const [like, setLike] = useState(false);
  const likedGames = useAppSelector(state => state.likedGames);
  const dispatch = useAppDispatch();

  const addGame = (game: Games) => {
    dispatch(LikedActions.addGame(game));
  }

  const removeGame = (game: Games) => {
    dispatch(LikedActions.removeGame(game));
  }

  const addId = (param: number) => {
    dispatch(IdAction.setId(param));
  }

  useEffect(() => {
    localStorage.setItem('likedGames', JSON.stringify(likedGames));
  }, [likedGames]);

  const handleLIke = () => {
    setLike(prev => !prev);
  };
  return (
    <div className={styles.card}>
      <Link to='/details' onClick={() => addId(+game.appId)}>
      <img
        className={styles.image}
        src={game.imgUrl}
        alt="game"
      />
      { like && (
        <div className={styles.box}>
          <div className={styles.border}>
            <img
              className={styles.play}
              src={require('../../images/play-icon.png')} 
              alt="play" 
            />
          </div>
        </div>
        )}
      </Link>
        <div className={styles.body}>
          <p className={styles.title}>{game.title}</p>
          <p  className={styles.released}>{game.released}</p>
          <div className={styles.row}>
            <p>{game.price}</p>
            <div onClick={() => handleLIke()}>
              {
                like ? (
                  <img
                    className={styles.heart}
                    src={require('../../images/red-heart.png')}
                    alt="heart"
                    onClick={() => removeGame(game)}
                  />
                )
                : (
                <img
                  className={styles.heart}
                  src={require('../../images/white-heart.png')}
                  alt="heart"
                  onClick={() => addGame(game)}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}