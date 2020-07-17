import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Pagination from '../../../components/Pagination'

import { useStatePost, useEffectsPost } from '../../../providers/Post'
import PostList from '../components/PostList'
import { makeStyles } from '@material-ui/core'
import LoaderBar from '../../../components/LoaderBar'

const PostContainer = () => {
  const classes = useStyles()
  const { posts, loading, lastPage, currentPage } = useStatePost()
  const { getPosts, onChangePage } = useEffectsPost()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className={classes.container}>
      <LoaderBar loading={loading && posts.length > 0} />
      <PostList posts={posts} loading={loading} />
      {
        posts.length ? (
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
            onChangePage={onChangePage}
          />
        ) : null
      }
    </div>
  )
}

export default PostContainer

const useStyles = makeStyles({
  container: {
    padding: '1rem',
  }
})