import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const User = useSelector(state=> state.User.user)
  return (
    <div>
      <h2>{User?.name} Profile</h2>
    </div>
  )
}

export default Profile
