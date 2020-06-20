import { ADD_FLASH_MESSAGE,DEL_FLASH_MESSAGE } from '../actions/actionTypes'
import shortid from 'shortid'

const addFlashMessage = (state=[],action={}) => {
  switch(action.type){
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id:shortid.generate(),
          type:action.message.type,
          text:action.message.text
        }
      ]
    case DEL_FLASH_MESSAGE:
      return state.filter(item=>{
        return item.id !== action.id
      })
    default:
      return state
  }
}

export default addFlashMessage