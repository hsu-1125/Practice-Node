import mongoose from 'mongoose'

const { Schema } = mongoose

class Book {
  constructor() {
    const schema = new Schema({
      title: String,
      author: String,
    })

    this.mongo = mongoose.model('books', schema)
  }

  async getBookList() {
    return await this.mongo.find({})
  }

  async getBookByTitle(title) {
    var regexp = new RegExp('.*' + title + '.*');
    return await this.mongo.find({ title: regexp })
  }

  async getBookById(id) {
    return await this.mongo.findById(id)
  }

  async create(book) {
    return await this.mongo.insertMany(book)
  }

  async updateAuthor(id, newBookDoc) {
    await this.mongo.updateOne({ _id: id }, newBookDoc)
    return null
  }

  async delete(id) {
    await this.mongo.deleteOne({ _id: id })
    return null
  }
}

export default new Book()