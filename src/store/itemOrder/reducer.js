import {
  SET_CURRENT_IMAGE,
} from './actionType'
import { DefaultState } from '../../components/ItemOrder/Components/ItemOrderData'

export default function itemOrderReducer (state = DefaultState, action = {}) {
  switch (action.type) {

    case SET_CURRENT_IMAGE: {
      const { payload } = action
      const newState = {
        ...state,
        currentImage: state.currentImage + (payload.currentImage),
      }
      return newState
    }
    default:
      return state
  }
}
