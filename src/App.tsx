import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { BadRequest } from './components/BadRequest/BadRequest';
import { GamesList } from './components/GamesList/GamesList';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import { Pagination } from './components/Pagination/Pagination';
import  * as gamesActions from './features/games';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(4);

  const dispatch = useAppDispatch();
  const { games, loading, error } = useAppSelector(state => state.games);
  const { filter } = useAppSelector(state => state.games);

  const lastGameIndex = currentPage * gamesPerPage;
  const firstGameIndex = lastGameIndex - gamesPerPage;

  const currentGames = filter.slice(firstGameIndex, lastGameIndex);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(gamesActions.init());
  }, []);


  if (loading) {
    return <Loader />;
  }

  if ( error ) {
    return <BadRequest />;
  }
  return (
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <Header setCurrentPage={setCurrentPage} />
          </div>
        </header>
        <main className="main">
          <GamesList currentGames={currentGames}/>
        </main>
        <footer className="footer">
          <Pagination
            gamesPerPage={gamesPerPage}
            totalGames={games.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </footer>
      </div>
  );
}

export default App;