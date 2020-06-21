import { ADD_FLASH_MESSAGE,DEL_FLASH_MESSAGE,CLEAR_FLASH_MESSAGE } from './actionTypes'

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}
export const delFlashMessage = (id) => {
  return {
    type: DEL_FLASH_MESSAGE,
    id
  }
}

export const clearFlashMessage = (message) => {
  return {
    type: CLEAR_FLASH_MESSAGE,
    message
  }
}