exports.getBooks = (req, res) => {
  res.send('Fetch all books');
};

exports.getBookById = (req, res) => {
  res.send(`Fetch book with ID ${req.params.id}`);
};

exports.createBook = (req, res) => {
  res.send('Create a new book');
};
