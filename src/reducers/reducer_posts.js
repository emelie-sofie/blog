import { FETCH_POSTS } from '../actions'
import { FETCH_POST } from '../actions'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      const post = action.payload.data
      return { ...state, [action.payload.data.id]: action.payload.data } //es6
      // const newState = {...state, }
      // newState[post.id] = post
      // return newState
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
