import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import OddEven from './Components/OddEven';

ReactDOM.render(
  <React.StrictMode>
    <OddEven />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
