import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from './components/cards/cardsSlice';
import { Provider } from 'react-redux';
import { searchSlice } from './components/searchBar/searchSlice';
import { commentsSlice } from './components/comment/commentsSlice';

const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
    search: searchSlice.reducer, 
    comments: commentsSlice.reducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
