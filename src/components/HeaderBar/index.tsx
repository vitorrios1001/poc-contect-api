import React from 'react'
import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

const HeaderBar = () => {
  const history = useHistory()

  const toggleToBack = () => {
    history.goBack()
  }

  return (
    <div>
      <IconButton onClick={toggleToBack}>
        <ArrowBack />
      </IconButton>
    </div>
  )
}

export default HeaderBar
