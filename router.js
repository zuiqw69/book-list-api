const express = require('express')
const router = express.Router();
const books = require('./booksController')

router.get('/books',books.index)
router.get('/books/:id',books.show)
router.delete('/books/:id',books.delete)
router.post('/books/create',books.create)
router.put('/books/:id',books.update)
router.get('/books/author/:author', books.author)
router.get('/books/description/:description', books.description)

module.exports = router;