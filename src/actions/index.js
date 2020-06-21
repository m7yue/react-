import * as flashMessages from './flashMessages'
import * as  loginActions from './loginActions'
import * as signupActions from './signupActions'
import * as storageUserActions from './storageUserActions'

const exportActions={
  ...flashMessages,
  ...loginActions,
  ...signupActions,
  ...storageUserActions
}
export default exportActions