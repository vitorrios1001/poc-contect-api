import React from 'react'

import { PostProvider } from '../../../../providers/Post'
import { UserProvider } from '../../../../providers/User'

import Details from '../../containers/Details'

const DetailsPost = () => {
  return (
    <PostProvider>
      <UserProvider>
        <Details />
      </UserProvider>
    </PostProvider>
  )
}

export default DetailsPost
