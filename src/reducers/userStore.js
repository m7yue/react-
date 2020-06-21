export default function userStorage(state='',action){
  switch (action.type){
    case 'userSave':
      return action.user
    default:
      return state
  }
}