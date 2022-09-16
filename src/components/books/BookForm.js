import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// function BookForm({ onAddBook }) {
//     const [title, setTitle] = useState("");
//     const [author, setAuthor] = useState("");
//     const [genre, setGenre] = useState("");
//     const [publicationDate, setPublicationDate] = useState("");
    
//     function handleSubmit(e) {
//         e.preventDefault();
//         const newBook = {
//         title,
//         author,
//         genre,
//         publicationDate
//         }
//         fetch("https://book-review-app-espersonnel.herokuapp.com/books", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newBook)
//         })
//         .then(resp => resp.json())
//         .then(data => {
//         console.log(data)
//         onAddBook(data)
//         })
//     }
    
//     return (
//         <div className="book-form">
//         <h2>Add Book</h2>
//         <form onSubmit={handleSubmit}>
//             <label>Title</label>
//             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//             <label>Author</label>
//             <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
//             <label>Genre</label>
//             <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
//             <label>Publication Date</label>
//             <input type="text" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
//             <input type="submit" value="Add Book"  />
//         </form>
//         </div>
//     );
// }

function BookForm({ onAddBook }) {

    const [bookFormData, setBookFormData] = useState({
        title: "",
        author: "",
        genre: "",
        publication_date: ""
    })

    function handleBookFormChange(e) {
        setBookFormData({
            ...bookFormData,
            [e.target.name]: e.target.value
        })
    }

    function handleBookFormSubmit(e) {
        e.preventDefault();

        fetch("https://book-review-app-espersonnel.herokuapp.com/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: bookFormData.title, author: bookFormData.author, genre: bookFormData.genre, publication_date: bookFormData.publication_date})
        })
        .then(resp => resp.json())
        .then(data => {
            onAddBook(data)
            setBookFormData({
                ...bookFormData,
                title: "",
                author: "",
                genre: "",
                publication_date: ""
            })
        })
    }

    return (
        <div className="book-form">
            <h2>Add Book</h2>
            <form onSubmit={handleBookFormSubmit} className='new-book-form'>
                <label>Title</label>
                <input type="text" name="title" value={bookFormData.title} onChange={handleBookFormChange} />
                <label>Author</label>
                <input type="text" name="author" value={bookFormData.author} onChange={handleBookFormChange} />
                <label>Genre</label>
                <input type="text" name="genre" value={bookFormData.genre} onChange={handleBookFormChange} />
                <label>Publication Date</label>
                <input type="text" name="publication_date" value={bookFormData.publication_date} onChange={handleBookFormChange} />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
}


export default BookForm;