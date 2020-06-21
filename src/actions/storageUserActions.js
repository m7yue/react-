export const storageUserAction = (data) => {
  return {
    type: 'userSave',
    user:data.user
  }
}