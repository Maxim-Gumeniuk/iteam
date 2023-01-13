import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { actions } from '../../features/games';
import styles from './first.module.scss';

type Props = {
  setCurrentPage: (param: number) => void;
}

export const First: React.FC<Props> = ({setCurrentPage}) => {
  const { query } = useAppSelector(state => state.filtering);
  const dispatch = useDispatch();

  const searching = () => {
    dispatch(actions.search(query))
    setCurrentPage(1);
  }

  return (
    <>
      <img 
        className={styles.logo} 
        src={require('../../images/logo.png')} 
        alt="logo" 
      />
      <div className={styles.combine}>
        <div className={styles.default}>
          <span
            className={`${styles.text} ${styles.right}`}
            onClick={() => searching()}
          >
            Search
          </span>
          <Link to='like' className={styles.text}>Like list</Link>
        </div>
      </div>
    </>
  );
}