import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as sortActions} from '../../features/games';
import styles from './sort.module.scss';

type Props = {
  open: boolean,
  setOpen: (param: any) => void;
  openForDate: boolean,
  setOpenForDate: (param: any) => void;
}

export const Sort: React.FC<Props> = (
  {
    open,
    setOpen,
    openForDate,
    setOpenForDate
  }
) => {
  const dispatch = useDispatch();

  const sortByPriceDown = () => {
    dispatch(sortActions.sortingByPrice())
  }

  const searchByPriceup = () => {
    dispatch(sortActions.sortingByPriceUp())
  }

  const searchByDateUp = () => {
    dispatch(sortActions.sortingByDateUp())
    setOpenForDate(false);
  }

  const searchByDateDown = () => {
    dispatch(sortActions.sortingByDateDown())
    setOpenForDate(false);
  }

  const handleOpenModal = () => {
    setOpen(false);
  };

  return (
    <div 
      className={styles.sort}
      onClick={() => handleOpenModal()}
    >
      <input
        className={styles.input}
        onChange={() => handleOpenModal()}
        type="range"
        id="sorting"
        name="sorting"
        min="0"
        max="3"
      />
      <input
        className={styles.input}
        onChange={() => handleOpenModal()}
        type="range"
        id="sorting"
        name="sorting"
        min="0"
        max="3"
      />
      <input
        className={styles.input}
        onChange={() => handleOpenModal()}
        type="range"
        id="sorting"
        name="sorting"
        min="0"
        max="3"
      />
      {open && (
        <div className={styles.open}>
          <p 
            className={styles.text} 
            onClick={() => sortByPriceDown()}
          >
            Lower to bigger
          </p>
          <p 
            className={styles.text} 
            onClick={() => searchByPriceup()}
          >
            Bigger to lower</p>
        </div>
      )}
      {
        openForDate && (
          <div className={styles.open}>
          <p 
            className={styles.text} 
            onClick={() => searchByDateDown()}
          >
            Lower to bigger
          </p>
          <p 
            className={styles.text} 
            onClick={() => searchByDateUp()}
          >
            Bigger to lower
          </p>
        </div>
        )
      }
    </div>
  )
}