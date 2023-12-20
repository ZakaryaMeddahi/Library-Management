import { useEffect } from 'react';
import Book from '../Book/Book';
import './Table.css';
import PropTypes from 'prop-types';
import axios from 'axios';

function Table({ books, setBooks }) {
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios('http://localhost:3000/books');
        const books = response.data;
        setBooks(books);
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, []);

  console.log('Books: ', books);

  return (
    <div className="table">
      {books.map((book) => {
        return (
          <Book key={book.id} book={book} books={books} setBooks={setBooks} />
        );
      })}
    </div>
  );
}

Table.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Table;
