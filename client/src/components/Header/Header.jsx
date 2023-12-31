import { IoIosSearch } from 'react-icons/io';
import './Header.css';
import Create from '../Create/Create';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Header({ books, setBooks, setBookSearch }) {
  const [displayPopup, setDisplayPopup] = useState(false);

  const searchBooks = (e) => {
    setBookSearch(e.target.value);
  };

  const togglePopup = () => {
    setDisplayPopup(!displayPopup);
  };

  return (
    <div className="header">
      <div className="search-bar">
        <IoIosSearch className="search-button" />
        <input
          type="text"
          name=""
          id=""
          placeholder="clean code"
          onChange={searchBooks}
        />
      </div>
      <button onClick={togglePopup}>Add +</button>
      {displayPopup && (
        <Create
          setDisplayPopup={setDisplayPopup}
          books={books}
          setBooks={setBooks}
        />
      )}
    </div>
  );
}

Header.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
  setBookSearch: PropTypes.func.isRequired,
};

export default Header;
