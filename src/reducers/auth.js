export default function auth(state={},action){
  switch (action.type){
    case 'login':
      return action.userData
    default:
      return state
  }
}