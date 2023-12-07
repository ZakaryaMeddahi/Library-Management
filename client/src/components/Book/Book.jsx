import './Book.css';

function Book() {
  return (
    <div className="book">
      <div className="book-info">
        <div className="book-cover">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg"
            alt="Clean Code"
          />
        </div>
        <div>
          <h3 className="title">Clean Code</h3>
          <p className="author">Author: Robert C. Martin</p>
          <p className="author">Adherent: Zakarya</p>
        </div>
      </div>
      <div className="book-actions">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default Book;
