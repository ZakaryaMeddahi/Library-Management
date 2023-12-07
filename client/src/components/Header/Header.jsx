import { IoIosSearch } from 'react-icons/io';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="search-bar">
        <IoIosSearch className="search-button" />
        <input type="text" name="" id="" placeholder="Clean code" />
      </div>
      <button>Add +</button>
    </div>
  );
}

export default Header;
