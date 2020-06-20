export default function userStorage(state='',action){
  switch (action.type){
    case 'userSave':
      return action.username
    default:
      return state
  }
}