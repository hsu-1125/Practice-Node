import errorFactory from "../errors/errorFactory.js";
import * as ErrorConst from "../errors/constants.js";
import * as auth from "../lib/auth.js";

export default class DrinkService {
  constructor(_db_user) {
    // reference from /models/User.js APIs
    this._db_user = _db_user
  }

  async signUp(name, email, password) {
    const user = await this._db_user.find(email)
    if (user) throw errorFactory(ErrorConst.USERNOTEXIST)

    const encryptedPaaword = auth.encrypt(password)

    const userDoc = { 
      name, 
      email, 
      password: encryptedPaaword.password, 
      password_salt: encryptedPaaword.password_salt 
    }

    await this._db_user.create(userDoc)

    return null
  }

  async login(email, password) {
    const user = await this._db_user.find(email)
    if (!user) throw errorFactory(ErrorConst.USERNOTEXIST)

    auth.verifyPassword(password, user)

    const userDoc = {
      userId: user._id,
      name: user.name,
      email: user.email
    }
    return {user: userDoc, token: auth.createToken(userDoc)}
  }

  async changePassword(email, password, newPassword) {
    const user = await this._db_user.find(email);
    if (!user) throw errorFactory(ErrorConst.USERNOTEXIST);
    auth.verifyPassword({ email, password }, user);

    const encrptedPassword = auth.encrypt(newPassword);
    await this._db_user.updateUserPassword(email, encrptedPassword.password, encrptedPassword.password_salt);
    return null;
  }
}