import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  ERRORS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={Setting.ERRORS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
