import React from 'react'

import { Grid } from '@material-ui/core'

import PostItem from './PostItem'
import GenericLoader from '../../../../components/GenericLoader'

import { Post } from '../../../../models/Post'

interface Props {
  posts: Post[]
  loading: boolean
}

const PostList = ({ posts, loading }: Props) => {
  if (!posts.length && loading) {
    return (
      <GenericLoader text="Loading posts. Wait..." />
    )
  }

  return (
    <>
      <Grid container spacing={2}>
        {
          posts.map(post => (
            <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
              <PostItem post={post} />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default PostList
