import './Book.css';
import Update from '../Update/Update';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Delete from '../Delete/Delete';

function Book({ book, books, setBooks }) {
  const [displayUpdate, setDisplayUpdate] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);

  const updateClick = () => {
    setDisplayUpdate(true);
    console.log(`The Book With ID ${book.id} Has Been Updated`);
  };

  const deleteClick = () => {
    setDisplayDelete(true);
    console.log(`The Book With ID ${book.id} Has Been Deleted`);
  };

  console.log('Book: ', book.id);

  return (
    <div className="book">
      <div className="book-info">
        <div className="book-cover">
          <img src={book.imgUrl} alt="Clean Code" />
        </div>
        <div>
          <h3 className="title">{book.title}</h3>
          <p className="author">Author: {book.author}</p>
          <p className="adherent">Adherent: {book.adherent}</p>
        </div>
      </div>
      <div className="book-actions">
        <button className="edit-button" onClick={() => updateClick()}>
          Edit
        </button>
        <button className="remove-button" onClick={() => deleteClick()}>
          Delete
        </button>
      </div>
      {displayUpdate && (
        <Update
          book={book}
          setDisplayUpdate={setDisplayUpdate}
          books={books}
          setBooks={setBooks}
        />
      )}
      {displayDelete && (
        <Delete
          bookId={book.id}
          setDisplayDelete={setDisplayDelete}
          books={books}
          setBooks={setBooks}
        />
      )}
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Book;
