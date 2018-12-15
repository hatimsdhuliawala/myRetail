import {
  REQUEST_DATA,
  RECEIVE_DATA,
} from './actionType'
import { DefaultState } from '../../components/ItemOrder/Components/ItemOrderData'

export default function itemOrderReducer (state = DefaultState, action = {}) {
  switch (action.type) {

    case REQUEST_DATA: {
      const { payload } = action
      const newState = {
        ...state,
        copyData: payload.copyData,
        isFetching: payload.isFetching,
        selectedCopy: payload.selectedCopy,
      }
      return newState
    }
    case RECEIVE_DATA: {
      const { payload } = action
      const newState = {
        ...state,
        copyData: payload.copyData,
        isFetching: payload.isFetching,
        totalPages: payload.totalPages,
        totalElements: payload.totalElements,
      }
      return newState
    }
    default:
      return state
  }
}
