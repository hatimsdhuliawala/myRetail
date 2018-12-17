import {
  SET_CURRENT_IMAGE,
  SET_QUANTITY,
} from './actionType'

export function setCurrentImage(image) {
  return {
    type: SET_CURRENT_IMAGE,
    payload: {
      currentImage: image,
    },
  }
}

export function setQuantity(value) {
  return {
    type: SET_QUANTITY,
    payload: {
      itemQuantity: value,
    },
  }
}
