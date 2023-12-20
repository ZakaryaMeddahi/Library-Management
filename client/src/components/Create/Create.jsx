import './Create.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useRef } from 'react';

const Create = ({ setDisplayPopup, books, setBooks }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const imgRef = useRef();
  const adherentRef = useRef();

  const hidePopup = () => {
    setDisplayPopup(false);
  };

  const createBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/books', {
        title: titleRef.current.value,
        author: authorRef.current.value,
        imgUrl: imgRef.current.value,
        adherent: adherentRef.current.value,
      });
      const book = response.data;
      setBooks([...books, book]);
      setDisplayPopup(false);
      console.log('Book Created', books);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="overlay" onClick={hidePopup}></div>
      <div className="popup">
        <h3>New Book 🕮</h3>
        <form className="create-form">
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
            placeholder="Img Url"
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
            <button className="create-button" onClick={createBook}>
              create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Create.propTypes = {
  setDisplayPopup: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Create;
