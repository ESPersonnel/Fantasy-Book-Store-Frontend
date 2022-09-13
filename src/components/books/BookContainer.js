import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

function BookContainer({ books, onDeleteBook }) {

  const bookList = books.map((book) => {
    return <Book key={book.id} book={book} onDeleteBook={onDeleteBook} />
  })

  return (
    <div className="book-container">
      <h2>Books</h2>
      <Link to="/books/new">Add Book</Link>
      {bookList}
    </div>
  );
}

export default BookContainer;