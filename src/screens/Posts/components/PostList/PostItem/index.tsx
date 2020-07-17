import React from 'react'
import { useHistory } from 'react-router-dom'

import { Post } from '../../../../../models/Post'
import { Card, makeStyles, Button, Typography, CardContent, CardActions, Grid } from '@material-ui/core'

interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {
  const classes = useStyles()
  const history = useHistory()

  const toggleItem = () => {
    history.push(`/posts/${post.id}`)
  }

  return (
    <Card className={classes.container}>
      <CardContent>
        <Grid container wrap="nowrap" direction="column">
          <Grid item>
            <Typography variant="h5" noWrap>
              {post.title}
            </Typography>
          </Grid>
          <Grid item>
            <span>
              {post.body.substring(0, 60)}
            </span>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button onClick={toggleItem} variant="outlined" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostItem

const useStyles = makeStyles({
  container: {
    padding: '1rem',
  },
})
