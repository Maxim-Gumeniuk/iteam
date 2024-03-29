import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import  * as gameDetails from '../../features/gameDeatails';
import { BadRequest } from '../BadRequest/BadRequest';
import { Loader } from '../Loader/Loader';
import styles from './details.module.scss';
import { actions as IdAction} from '../../features/games';

export const Details: React.FC = () => {
  const {details, loading, error} = useAppSelector(state => state.details);
  const { id } = useAppSelector(state => state.games);
  const dispatch = useAppDispatch();
 
  useEffect(() => {
    if (id) {
      dispatch(gameDetails.initDetails(id));
    }
    console.log(details)
    return;


  },[]);

  if (loading) {
    return <Loader />;
  }

  if ( error ) {
    return <BadRequest />;
  }

  const addId = (param: number) => {
    dispatch(IdAction.setId(param));
  }

  return(
    <>
      <Link to='/' className={styles.back}>Back</Link>
        {details && (
          <Link to='/details' onClick={() => addId(+details!.appId)}>
            <div className={styles.box}>
              <div className={styles.card}>
                <img
                  className={styles.image}
                  src={details!.imgUrl} 
                  alt="logo" 
                />
                <div className={styles.body}>
                  <p className={styles.title}>{details!.title}</p>
                  <p className={styles.released}>{details!.released}</p>
                  <p className={styles.summary}>{details!.reviewSummary}</p>
                  <p className={styles.description}>{details!.description}</p>
                  <p className={styles.summary}>{details!.allReviews.summary}</p>
                  <p>{details!.price}</p>
              </div>
            </div>
          </div>
        </Link>
       )
      }
    </>
  );
}