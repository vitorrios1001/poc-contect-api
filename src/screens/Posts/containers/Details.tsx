/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'
import GenericLoader from '../../../components/GenericLoader'
import HeaderBar from '../../../components/HeaderBar'

import { useEffectsPost, useStatePost } from '../../../providers/Post'
import { useEffectsUser, useStateUser } from '../../../providers/User'

interface Params {
  id: number
}

const Details: FC = () => {
  const route = useRouteMatch()
  const routeParams = route.params as Params
  const classes = useStyles()
  
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
    <div className={classes.container}>
      <HeaderBar />
      <h2>Post details</h2>
      <h5>{postDetails.title}</h5>
      <p>{postDetails.body}</p>
      {
        loadingUser ? (
          <GenericLoader text="Loading user data. Wait..." />
        ) : (
          <div>
            <h6>User: {userDetails?.name}</h6>
          </div>
        )
      }
    </div>
  )
}

export default Details

const useStyles = makeStyles({
  container: {
    padding: '1rem',
  },
})