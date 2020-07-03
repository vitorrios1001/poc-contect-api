import React, { useEffect } from 'react'
import { useStatePost, useEffectsPost } from '../../../providers/Post'
import { Link } from 'react-router-dom'

const PostContainer = () => {
  const { posts, loading } = useStatePost()
  const { getPosts } = useEffectsPost()

  useEffect(() => {
    getPosts()
  }, [])

  if (loading) {
    return <h3>Loading posts...</h3>
  }

  const renderPosts = () => (
    posts.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </li>
    ))
  )

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {renderPosts()}
      </ul>
    </div>
  )
}

export default PostContainer
