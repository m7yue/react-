export const storageUserAction = (data) => {
  return {
    type: 'userSave',
    username:data.user
  }
}