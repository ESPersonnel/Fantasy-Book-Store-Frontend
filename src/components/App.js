import './App.css';
import { Routes, Route } from 'react-router-dom';
// import BookContainer from './components/books/BookContainer';
// import Book from './components/books/Book';
import Home from './Home';
import Author from './authors/Author';
import Book from './books/Book';


function App() {
  return (
    <>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/books" element={<BookContainer />} /> */}
          {/* <Route path="/books/new" element={<BookForm />} /> */}
          {/* <Route path="/books/:id" element={<Book />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/book" element={<Book />} />
        </Routes>
    </>
  );
}

export default App;
