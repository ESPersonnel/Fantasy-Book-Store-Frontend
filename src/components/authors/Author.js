import React from "react";
import { Link } from "react-router-dom";

function Author(props, onDeleteAuthor) {
  const { id, name, series_title} = props;

  function handleDeleteClick() {
    fetch(`http://localhost:9292/authors/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      onDeleteAuthor(id)
    })
  }

  return (
    <div className="author">
      <Link to={`/authors/${props.author.id}`}>
        View Author
        <h3>Name: {props.author.name}</h3>
        <p>Series: {props.author.series_title}</p>
        <button onClick={handleDeleteClick}>Delete</button>
      </Link>
    </div>
  );
}

  // return (
  //   <div className="author">
  //     <Link to={`/authors/${props.author.id}`}>
  //       <h3>{props.author.name}</h3>
  //     </Link>
  //   </div>
  // );



export default Author;