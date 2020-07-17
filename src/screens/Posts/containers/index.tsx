/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core'

import Pagination from '../../../components/Pagination'
import LoaderBar from '../../../components/LoaderBar'
import PostList from '../components/PostList'

import { useStatePost, useEffectsPost } from '../../../providers/Post'
import usePage from '../../../hooks/usePage'

const PostContainer = () => {
  const classes = useStyles()
  const { posts, loading, lastPage, currentPage } = useStatePost()
  const { getPosts, onChangePage } = useEffectsPost()

  useEffect(() => {
    getPosts()
  }, [])

  usePage('Posts - POC', true)

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