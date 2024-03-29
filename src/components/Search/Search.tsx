import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as FilteringActions } from '../../features/Filtering';
import { actions } from '../../features/games';
import styles from './search.module.scss';

type Props = {
  setCurrentPage: (param: number) => void
}

export const Search: React.FC<Props> = ({ setCurrentPage }) => {
  const [placeText, setPlaceText] = useState('');
  
  const dispatch = useAppDispatch();
  const { query } = useAppSelector(state => state.filtering);
  const { games } = useAppSelector(state => state.games);

  const searchItem = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(actions.search(query))
      setCurrentPage(1);
    }

  }

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
      onKeyDown={(e) => searchItem(e)}
    />
  )
}