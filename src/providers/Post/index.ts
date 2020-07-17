import { useState, useEffect } from 'react'
import constate from 'constate'

import { Post } from '../../models/Post'
import { fetchPosts, fetchPostById } from '../../api/post'

const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [postDetails, setPostDetails] = useState<Post>({} as Post)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const lastPage = 10;

  useEffect(() => {
    getPosts(currentPage)
  }, [currentPage])

  const onChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const getPosts = async (page = currentPage) => {
    setLoading(true)
    const data = await fetchPosts(page)

    window.scrollTo(0, 0)
    setTimeout(() => {
      setLoading(false)
      setPosts(data)
    }, 1000)
  }

  const getPostById = async (id: number) => {
    setLoading(true)
    const data = await fetchPostById(id)

    setTimeout(() => {
      setLoading(false)
      setPostDetails(data)
    }, 1000)
  }

  return {
    state: {
      posts,
      postDetails,
      loading,
      currentPage,
      lastPage,
    },
    effects: {
      getPosts,
      getPostById,
      onChangePage,
    },
  }
}

export const [PostProvider, useStatePost, useEffectsPost] = constate(
  usePost,
  value => ({ ...value.state }),
  value => ({ ...value.effects }),
)