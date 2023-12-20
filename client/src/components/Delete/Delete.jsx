import './Delete.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const Delete = ({ bookId, setDisplayDelete, books, setBooks }) => {
  const hidePopup = (e) => {
    e.preventDefault();
    setDisplayDelete(false);
  };

  console.log('Delete: ', bookId);

  const deleteBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:3000/books/${bookId}`
      );
      const book = response.data;
      setBooks(books.filter((book) => book.id !== bookId));
      setDisplayDelete(false);
      console.log('Book Deleted', book);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="overlay" onClick={hidePopup}></div>
      <div className="delete-popup">
        <h3>Remove Book 🗑️</h3>
        <form className="delete-form">
          <div className="buttons">
            <button className="cancel-button" onClick={hidePopup}>
              cancel
            </button>
            <button className="delete-button" onClick={deleteBook}>
              delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Delete.propTypes = {
  bookId: PropTypes.number.isRequired,
  setDisplayDelete: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Delete;
