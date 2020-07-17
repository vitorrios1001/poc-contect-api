import React from 'react'

import PaginationBase from '@material-ui/lab/Pagination'
import { Grid, makeStyles } from '@material-ui/core'

interface Props {
  lastPage: number
  currentPage: number
  onChangePage: (page: number) => void
}

const Pagination = ({
  lastPage,
  currentPage,
  onChangePage,
}: Props) => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.container} container justify="flex-end">
        <Grid item>
          <PaginationBase
            count={lastPage}
            page={currentPage}
            onChange={(event, value) => onChangePage(value)}
            color="primary" 
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Pagination

const useStyles = makeStyles({
  container: {
    padding: '1rem 0',
  }
})