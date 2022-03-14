export default class BookService {
  constructor(_db_Book) {
    // reference from /models/Book.js APIs
    this._db_Book = _db_Book
  }

  async getBookList(title) {
    if(title) return await this._db_Book.getBookByTitle(title)
    else return await this._db_Book.getBookList()
  }

  async getBook(id) {
    return await this._db_Book.getBookById(id)
  }

  async createBook(book) {
    const [bookDoc] = await this._db_Book.create(book)
    return bookDoc
  }

  async updateBook(id, book) {
    return await this._db_Book.updateAuthor(id, book)
  }

  async deleteBook(id) {
    return await this._db_Book.delete(id)
  }
}