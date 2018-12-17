import {
  SET_CURRENT_IMAGE,
  SET_QUANTITY,
  SET_LARGE_IMAGE,
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
    case SET_QUANTITY: {
      const { payload } = action
      const newState = {
        ...state,
        itemQuantity: state.itemQuantity + (payload.itemQuantity)
      }
      return newState
    }
    case SET_LARGE_IMAGE: {
      const { payload } = action
      const newState = {
        ...state,
        largerImage: payload.largerImage
      }
      return newState
    }
    default:
      return state
  }
}
