import {
  SET_CURRENT_IMAGE,
} from './actionType'

export function setCurrentImage(image) {
  return {
    type: SET_CURRENT_IMAGE,
    payload: {
      currentImage: image,
    },
  }
}
