import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DefaultPage from './pages/DefaultPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DefaultPage>
      <App />
    </DefaultPage>
  </React.StrictMode>
);
