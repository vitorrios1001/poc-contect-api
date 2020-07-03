import { useState } from 'react'
import constate from 'constate'

import { User } from '../../models/User'
import { fetchUsers, fetchUserById } from '../../api/user'

const useUser = () => {
  const [users, setUsers] = useState<User[]>([])
  const [userDetails, setUserDetails] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  const getUsers = async () => {
    setLoading(true)
    const data = await fetchUsers()

    setUsers(data)
    setLoading(false)
  }

  const getUserDetails = async (id: number) => {
    setLoading(true)
    const data = await fetchUserById(id)

    setUserDetails(data)
    setLoading(false)
  }

  return {
    state: {
      users,
      userDetails,
      loading,
    },
    effects: {
      getUsers,
      getUserDetails,
    },
  }
}

export const [UserProvider, useStateUser, useEffectsUser] = constate(
  useUser,
  value => ({ ...value.state }),
  value => ({ ...value.effects }),
)