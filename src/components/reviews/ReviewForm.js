import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ReviewForm( onAddReview ) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("");
    const [book_id, setBook_id] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddReview({ title, content, rating, book_id });
        setTitle("");
        setContent("");
        setRating("");
        setBook_id("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Content: </label>
        <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>Rating: </label>
        <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <label>Book ID: </label>
        <input
            type="text"
            value={book_id}
            onChange={(e) => setBook_id(e.target.value)}
        />
        <br />
        <input type="submit" value="Add Review" />
        </form>
    );
}

export default ReviewForm;