import React from 'react'

import { PostProvider } from '../../../providers/Post'
import PostContainer from '../containers'

const Posts = () => {
  return (
    <PostProvider>
      <PostContainer />
    </PostProvider>
  )
}

export default Posts
