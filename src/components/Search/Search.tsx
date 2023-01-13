import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as FilteringActions } from '../../features/Filtering';
import { actions } from '../../features/games';
import styles from './search.module.scss';

export const Search: React.FC = () => {
  const [placeText, setPlaceText] = useState('');

  const dispatch = useAppDispatch();
  const { query } = useAppSelector(state => state.filtering);
  const { games } = useAppSelector(state => state.games);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(FilteringActions.setQuery(event.target.value))
    if (event.target.value.trim().length === 0) {
      dispatch(actions.set(games))
    }
  }
  
  useEffect(() => {
    const placeHolderText = window.innerWidth > 992 
    ? 'Enter an app name...' 
    : 'Search';
    setPlaceText(placeHolderText);
  },[placeText]);
  return (
    <input 
      className={styles.search}
      type="text"
      placeholder={placeText}
      value={query}
      onChange={(event) => handleQuery(event)}
    />
  )
}