import mongoose from 'mongoose'

const { Schema } = mongoose

class User {
  constructor() {
    const schema = new Schema({
      name: String,
      email: String,
      password: String,
      password_salt: String
    })

    this.mongo = mongoose.model('users', schema)
  }

  async create(user) {
    return await this.mongo.insertMany(user)
  }

  async isUserExists(email) {
    return await this.mongo.exists({ email })
  }

  async find(email) {
    return await this.mongo.findOne({ email })
  }

  async updateUserPassword(email, password, password_salt) {
    return await this.mongo.updateOne({ email }, { password_salt, password })
  }
}

export default new User()