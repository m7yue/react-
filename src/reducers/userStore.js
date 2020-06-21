export default function userStorage(state='',action){
  console.log(action)
  switch (action.type){
    case 'userSave':
      return action.user
    default:
      return state
  }
}