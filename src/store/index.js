import { combineReducers } from 'redux'
import itemOrder from './itemOrder/reducer'

const rootReducer = combineReducers({
  itemOrder,
})

export default rootReducer
