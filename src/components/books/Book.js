import React, { useState } from "react";
import { Link } from "react-router-dom";

function Book(props, onDeleteBook) {

  const { id, title, author, genre, publication_date } = props;
  const [isfavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isfavorite);
  }

  function handleDeleteClick() {
    fetch(`https://book-review-app-espersonnel.herokuapp.com/books/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      onDeleteBook(id)
    })
  }

  return (
    <div className="book">
      <Link to={`/books/${props.book.id}` }>
        View Book
      </Link>
      <h3>Book: {props.book.title}</h3>
      <p>Author: {props.book.author}</p>
      <p>Genre: {props.book.genre}</p>
      <p>Publication Date: {props.book.publication_date}</p>
      <button onClick={toggleFavorite}>{isfavorite ? "Unfavorite" : "Favorite"}</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}


export default Book;
