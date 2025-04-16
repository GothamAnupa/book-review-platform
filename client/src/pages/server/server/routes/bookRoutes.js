const express = require('express');
const router = express.Router();
const { getBooks, getBookById, createBook } = require('../controllers/bookController');

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook); // Admin only

module.exports = router;
