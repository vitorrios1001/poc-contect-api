import { useState } from 'react'
import constate from 'constate'

import { Post } from '../../models/Post'
import { fetchPosts, fetchPostById } from '../../api/post'

const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [postDetails, setPostDetails] = useState<Post>({} as Post)
  const [loading, setLoading] = useState(false)

  const getPosts = async () => {
    setLoading(true)
    const data = await fetchPosts()

    setLoading(false)
    setPosts(data)
  }

  const getPostById = async (id: number) => {
    setLoading(true)
    const data = await fetchPostById(id)

    setLoading(false)
    setPostDetails(data)
  }

  return {
    state: {
      posts,
      postDetails,
      loading,
    },
    effects: {
      getPosts,
      getPostById,
    },
  }
}

export const [PostProvider, useStatePost, useEffectsPost] = constate(
  usePost,
  value => ({ ...value.state }),
  value => ({ ...value.effects }),
)