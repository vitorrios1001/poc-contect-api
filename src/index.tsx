import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

import './styles/global.css'
import { GlobalDataProvider } from './providers/Global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalDataProvider data={{}}>
      <Routes />
    </GlobalDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
