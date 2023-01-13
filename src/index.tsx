/* eslint-disable spaced-comment */
import React from 'react';
import { createRoot } from 'react-dom/client';
//import { Provider } from 'react-redux';
//import { store } from './app/store';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Details } from './components/Details/Details';
//import { LikeList } from './components/LikeList/LikeList';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <p>hello world!</p>
    {/*<BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details" element={<Details />} />
          <Route path="like" element={<LikeList />} />
        </Routes>
      </Provider>
    </BrowserRouter>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
