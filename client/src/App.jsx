import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className="main">
      <h2>Library Management</h2>
      <Header books={books} setBooks={setBooks} />
      <Table books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
