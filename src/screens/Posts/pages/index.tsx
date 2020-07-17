import React from 'react'

import { PostProvider } from '../../../providers/Post'
import PostContainer from '../containers'

import usePage from '../../../hooks/usePage'

const Posts = () => {
  usePage('Posts - POC', true)
  
  return (
    <PostProvider>
      <PostContainer />
    </PostProvider>
  )
}

export default Posts
