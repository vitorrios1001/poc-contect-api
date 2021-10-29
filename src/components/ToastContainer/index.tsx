import React from 'react'

import { ToastContainer as ToastPure } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const ToastContainer = () => {
  return (
    <ToastPure
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

export default ToastContainer
