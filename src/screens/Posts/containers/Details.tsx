import React, { FC, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import HeaderBar from '../../../components/HeaderBar'

import { useEffectsPost, useStatePost } from '../../../providers/Post'
import { useEffectsUser, useStateUser } from '../../../providers/User'

interface Params {
  id: number
}

const Details: FC = () => {
  const route = useRouteMatch()
  const routeParams = route.params as Params
  
  const { postDetails, loading: loadingPost } = useStatePost()
  const { userDetails, loading: loadingUser } = useStateUser()

  const { getPostById } = useEffectsPost()
  const { getUserDetails } = useEffectsUser()

  useEffect(() => {
    getPostById(routeParams.id)
  }, [])

  useEffect(() => {
    if (postDetails?.userId > 0) {
      getUserDetails(postDetails.userId)
    }
  }, [postDetails])

  if (loadingPost) {
    return <h5>Loading post details...</h5>
  }
  
  return (
    <div>
      <HeaderBar />
      <h2>Post details</h2>
      <h5>{postDetails.title}</h5>
      <p>{postDetails.body}</p>
      {
        loadingUser
          ? <h5>Loading autor details...</h5>
          : (
            <div>
              <h6>User: {userDetails?.name}</h6>
            </div>
          )
      }
    </div>
  )
}

export default Details
