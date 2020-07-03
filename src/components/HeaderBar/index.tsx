import React from 'react'
import { useHistory } from 'react-router-dom'

const HeaderBar = () => {
  const history = useHistory()

  const toggleToBack = () => {
    history.goBack()
  }

  return (
    <div>
      <button onClick={toggleToBack}>
        Go back
      </button>
    </div>
  )
}

export default HeaderBar
