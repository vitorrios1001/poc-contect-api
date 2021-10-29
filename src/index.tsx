import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import ToastContainer from './components/ToastContainer'
import { GlobalDataProvider } from './providers/Global'

import './styles/global.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

ReactDOM.render(
  <React.StrictMode>
    <GlobalDataProvider data={{}}>
      <Routes />
      <ToastContainer />
    </GlobalDataProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
