import './Update.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useRef } from 'react';

const Update = ({ book, setDisplayUpdate, books, setBooks }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const imgRef = useRef();
  const adherentRef = useRef();

  useEffect(() => {
    const setDefaultInputs = () => {
      titleRef.current.value = book.title;
      authorRef.current.value = book.author;
      imgRef.current.value = book.imgUrl;
      adherentRef.current.value = book.adherent;
    };

    setDefaultInputs();
  }, []);

  const hidePopup = () => {
    setDisplayUpdate(false);
  };

  console.log('Update: ', book.id);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const id = book.id;
      const response = await axios.patch(
        `http://localhost:3000/books/${book.id}`,
        {
          title: titleRef.current.value,
          author: authorRef.current.value,
          imgUrl: imgRef.current.value,
          adherent: adherentRef.current.value,
        }
      );
      console.log('Response', response);
      const updatedBook = response.data;

      const bookIndex = books.findIndex((book) => book.id === id);
      const newBooks = [...books];
      newBooks[bookIndex] = updatedBook;
      setBooks(newBooks);
      console.log('Book Updated', updatedBook);
      setDisplayUpdate(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="overlay" onClick={hidePopup}></div>
      <div className="popup">
        <h3>Modify Book 🖉</h3>
        <form className="update-form">
          <input
            ref={titleRef}
            type="text"
            name="title"
            id=""
            placeholder="Title"
          />
          <input
            ref={authorRef}
            type="text"
            name="author"
            id=""
            placeholder="Author"
          />
          <input
            ref={imgRef}
            type="text"
            name="image url"
            id=""
            placeholder="Image Url"
          />
          <input
            ref={adherentRef}
            type="text"
            name="adherent"
            id=""
            placeholder="Adherent"
          />
          <div className="buttons">
            <button className="cancel-button" onClick={hidePopup}>
              cancel
            </button>
            <button className="update-button" onClick={updateBook}>
              done
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Update.propTypes = {
  setDisplayUpdate: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Update;
