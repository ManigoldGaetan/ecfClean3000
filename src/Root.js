import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default Root