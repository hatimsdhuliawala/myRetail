/* global _ */
import {
  REQUEST_DATA,
  RECEIVE_DATA,
} from './actionType'


export function successRequestDataEvent (data, json, totalPages, totalElements) {
  return {
    type: RECEIVE_DATA,
    payload: {
      isFetching: false,
      copyData: json,
      totalPages: totalPages,
      totalElements: totalElements,
    },
  }
}

export function dispatchRequestCopyDataEvent (data) {
  var newCopyData = _.cloneDeep(data)
  newCopyData.splice(0, newCopyData.length)
  return {
    type: REQUEST_DATA,
    payload: {
      isFetching: true,
      copyData: newCopyData,
      selectedCopy: [],
    },
  }
}
