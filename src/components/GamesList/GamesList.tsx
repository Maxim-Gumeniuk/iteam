import React from 'react';
import { Games } from '../../types/games';
import { Game } from '../Game/Game';
import styles from './gamesList.module.scss';

type Props = {
  currentGames: Games[]
}

export const GamesList: React.FC<Props> = ({ currentGames }) => {
  return (
    <>
      <ul className={styles.row}>
        {
          currentGames.map((game: Games) => (
            <li className={styles.item} key={+game.appId}> 
              <Game game={game} />
            </li>
          ))
        }
      </ul>
    </>
  )
}