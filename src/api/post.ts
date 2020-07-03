import request from '../services/request'
import { Post } from '../models/Post'

export const fetchPosts = async () => {
  const { data } = await  request.get<Post[]>('/posts')

  return data
}

export const fetchPostById = async (id: number) => {
  const { data } = await request.get<Post>(`/posts/${id}`)

  return data
}
