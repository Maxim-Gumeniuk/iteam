import React, { useState } from 'react';
import styles from './pagination.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  gamesPerPage: number;
  totalGames: number;
  paginate: (param: number) => void;
}

export const Pagination: React.FC<Props> = (
  {
    gamesPerPage,
    totalGames,
    paginate,
  }
) => {
  const [setup, setSetup] = useState(2);
  const [switched, setSwitched] = useState(1);
  const pageNumbers = [];

  for (let i = switched; i <= Math.ceil((totalGames / gamesPerPage) - 1) / setup; i++) {
    pageNumbers.push(i);
  }

  const switchedFront = () => {
    setSetup(1);
    setSwitched(4);
  }

  const switcheBack = () => {
    setSetup(2);
    setSwitched(1);
  }

  return (
    <div className={styles.row}>
      <div 
        className={styles.item} 
        onClick={() => switcheBack()}
      >
        <img
          src={require('../../images/arrow-back.png')} 
          alt="arrow" 
        />
      </div>
      <ul className={styles.pagination}>
        {
          pageNumbers.map((number) => (
            <li 
              key={number}
              onClick={() => paginate(number)}
            > 
              <NavLink 
                to=''
                className={styles.item}
              >
                {number}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div className={styles.item} onClick={() => switchedFront()}>
        <img
          src={require('../../images/arrow-front.png')} 
          alt="arrow" 
        />
      </div>
    </div>
  );
};