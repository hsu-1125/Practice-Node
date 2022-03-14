import * as Types from './constants.js'
import * as PracticeError from './index.js'

const errorFactory = (type) => {
  switch (type) {
    case Types.NOTLOGIN:
      return new PracticeError.NotLoginError()
    case Types.TOKENEXPIRED:
      return new PracticeError.TokenExpiredError()
    case Types.USERNOTEXIST:
      return new PracticeError.UserNotExistError()
    default:
      break;
  }
}

export default errorFactory