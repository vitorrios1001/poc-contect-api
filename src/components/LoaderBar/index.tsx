import React from 'react'
import { LinearProgress, makeStyles } from '@material-ui/core'

interface Props {
  loading?: boolean
}

const LoaderBar = ({ loading = true }: Props) => {
  const classes = useStyles()

  if (!loading) {
    return null
  }

  return (
    <div className={classes.container}>
      <LinearProgress />
    </div>
  )
}

export default LoaderBar

const useStyles = makeStyles({
  container: {
    padding: '1rem',
  },
})