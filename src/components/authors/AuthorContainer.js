import React from "react";
import Author from "./Author";
import { Link } from "react-router-dom";

function AuthorContainer({ authors, onDeleteAuthor }) {

  const authorList = authors.map((author) => {
    return <Author key={author.id} author={author} onDeleteAuthor={onDeleteAuthor} />
  })

  return (
    <div className="author-container">
      <h2>Authors</h2>
      <Link to="/authors/new">Add Author</Link>
      {authorList}
    </div>
  );
}

export default AuthorContainer;