import React, { useEffect, useState } from 'react';
import styles from './pagination.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  gamesPerPage: number;
  totalGames: number;
  paginate: (param: number) => void;
  currentPage: number,
  setCurrentPage: (param: number) => void;
}

export const Pagination: React.FC<Props> = (
  {
    gamesPerPage,
    totalGames,
    paginate,
    currentPage,
    setCurrentPage
  }
) => {
  const [setup, setSetup] = useState(2);
  const [switched, setSwitched] = useState(1);
  const [disabled, setDisabled] = useState(styles.item);
  const [backDisabled, setBackDisabled] = useState(styles.disabled);
  const [back, setBack] = useState(false);
  const [up, setUp] = useState(true);
  const pageNumbers = [];

  useEffect(() => { 
    if (currentPage > 3) {
      setDisabled(styles.disabled);
      setBackDisabled(styles.item)
      setBack(false);
      setUp(true);
    } 

    if (currentPage < 4) {
      setDisabled(styles.item);
      setBackDisabled(styles.disabled)
      setBack(true);
      setUp(false);
    }
  },[currentPage])

  for (let i = switched; i <= Math.ceil((totalGames / gamesPerPage) - 1) / setup; i++) {
    pageNumbers.push(i);
  }

  const switchedFront = () => {
    setSetup(1);
    setSwitched(4);
    setCurrentPage(4)
  }

  const switcheBack = () => {
    setSetup(2);
    setSwitched(1);
    setCurrentPage(3)
  }

  return (
    <div className={styles.row}>
      <button
        disabled={back}
        className={backDisabled}  
        onClick={() => switcheBack()}
      >
        <img
          src={require('../../images/arrow-back.png')} 
          alt="arrow" 
        />
      </button>
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
      <button
        disabled={up}
        className={disabled} 
        onClick={() => switchedFront()} 
      >
        <img
          src={require('../../images/arrow-front.png')} 
          alt="arrow"
        />
      </button>
    </div>
  );
};