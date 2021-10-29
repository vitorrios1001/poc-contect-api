import request from '../services/request'
import { User } from '../models/User'

export const fetchUsers = async () => {
  const { data } = await request.get<User[]>('/users')

  return data
}

export const fetchUserById = async (id: number) => {
  const { data } = await request.get<User>(`/users/${id}`)

  return data
}
