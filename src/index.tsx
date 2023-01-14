import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import { Details } from './components/Details/Details';
import { LikeList } from './components/LikeList/LikeList';


const container = document.getElementById('root')!;
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '/like',
    element: <LikeList />,
  }
]);


  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
