import axios from 'axios' 

const UPDATE_ID = 'UPDATE_ID'
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PROFILE_PICTURE = 'UPDATE_PROFILE_PICTURE'


let initialState = {
  id: 0,
  username: '',
  profilePicture: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_ID:
        return {...state, id: action.payload.data}
      case UPDATE_USERNAME:
        return {...state, username: action.payload.data}
      case UPDATE_PROFILE_PICTURE:
        return {...state, profilePicture: action.payload.data}

    default: 
      return state
    }
}

export function updateId(id) { 
  return {
    type: UPDATE_ID ,
    payload: id
  }
}

export function updateUsername(username) { 
  return {
    type: UPDATE_USERNAME ,
    payload: username
  }
}
export function updateProfilePicture(profilePicture) { 
  return {
    type: UPDATE_PROFILE_PICTURE,
    payload: profilePicture
  }
}