import React from 'react'
import { CircularProgress, Typography, makeStyles } from '@material-ui/core'

interface Props {
  loading?: boolean
  text?: string
}

const GenericLoader = ({ loading = true, text }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <CircularProgress className={classes.loader} />
      <Typography>{text}</Typography>
    </div>
  )
}

export default GenericLoader

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '12vw 0',
  },
  loader: {
    padding: '2vw',
  },
})
