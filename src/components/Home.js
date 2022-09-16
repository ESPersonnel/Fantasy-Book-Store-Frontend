import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Book from './books/Book';
import Author from './authors/Author';
import Review from './reviews/Review';
import BookForm from './books/BookForm';
import AuthorForm from './authors/AuthorForm';
import ReviewForm from './reviews/ReviewForm';
import './App.css';

function Home() {

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [search, setSearch] = useState("");
    const [bookForm, setBookForm] = useState(false);
    const [authorForm, setAuthorForm] = useState(false);
    const [reviewForm, setReviewForm] = useState(false);

    // Fetch data from Ruby backend
    const fetchBooks = () => {
        fetch("https://book-review-app-espersonnel.herokuapp.com/books")
        .then(resp => resp.json())
        .then(data => setBooks(data))
    }

    const fetchAuthors = () => {
        fetch("https://book-review-app-espersonnel.herokuapp.com/authors")
        .then(resp => resp.json())
        .then(data => setAuthors(data))
    }

    const fetchReviews = () => {
        fetch("https://book-review-app-espersonnel.herokuapp.com/reviews")
        .then(resp => resp.json())
        .then(data => setReviews(data))
    }

    // Delete book
    const deleteBook = (id) => {
        fetch(`https://book-review-app-espersonnel.herokuapp.com/books/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchBooks()
        })
    }

    // Delete author
    const deleteAuthor = (id) => {
        fetch(`https://book-review-app-espersonnel.herokuapp.com/authors/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchAuthors()
        })
    }

    // Delete review
    const deleteReview = (id) => {
        fetch(`https://book-review-app-espersonnel.herokuapp.com/reviews/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchReviews()
        })
    }

    // Add book
    const addBook = (book) => {
        fetch("https://book-review-app-espersonnel.herokuapp.com/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchBooks()
        }
        )
    }
    
    // Add author
    const addAuthor = (author) => {
        fetch("https://book-review-app-espersonnel.herokuapp.com/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(author)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchAuthors()
        }
        )
    }

    // Add review
    const addReview = (review) => {
        fetch("https://book-review-app-espersonnel.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchReviews()
        }
        )
    }

    // Update book
    const updateBook = (book) => {
        fetch(`https://book-review-app-espersonnel.herokuapp.com/books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchBooks()
        }
        )
    }

    // Update author
    const updateAuthor = (author) => {
        fetch(`https://book-review-app-espersonnel.herokuapp.com/authors/${author.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(author)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchAuthors()
        }
        )
    }

    // Update review
    const updateReview = (review) => {
        fetch(`https://book-review-app-espersonnel.herokuapp.com/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            fetchReviews()
        }
        )
    }

    // Search for books and authors
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    const filteredAuthors = authors.filter(author => author.name.toLowerCase().includes(search.toLowerCase()))

    // Render books and authors
    // const renderBooks = filteredBooks.map(book => <Book key={book.id} book={book} deleteBook={deleteBook} updateBook={updateBook} />)
    // const renderAuthors = filteredAuthors.map(author => <Author key={author.id} author={author} deleteAuthor={deleteAuthor} updateAuthor={updateAuthor} />)
    // const renderReviews = reviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} updateReview={updateReview} />)

    const renderBooks = filteredBooks.map(book => <Book key={book.id} book={book} updateBook={updateBook} />)
    const renderAuthors = filteredAuthors.map(author => <Author key={author.id} author={author} updateAuthor={updateAuthor} />)
    const renderReviews = reviews.map(review => <Review key={review.id} review={review} updateReview={updateReview} />)


    // Fetch data from Ruby backend
    useEffect(() => {
        fetchBooks()
        fetchAuthors()
        fetchReviews()
    }

    , [])

    return (
        <div className="App">
            <h1>Book Review App</h1>
            {/* <SearchBar search={search} setSearch={setSearch} /> */}
            <Link to="/">Home</Link>
            <button onClick={() => setBookForm(!bookForm)}>Add Book</button>
            <button onClick={() => setAuthorForm(!authorForm)}>Add Author</button>
            <button onClick={() => setReviewForm(!reviewForm)}>Add Review</button>
            {bookForm ? <BookForm addBook={addBook} /> : null}
            {authorForm ? <AuthorForm addAuthor={addAuthor} /> : null}
            {reviewForm ? <ReviewForm addReview={addReview} /> : null}
            <h2>Books</h2>
            <div className="books">
                {renderBooks}
            </div>
            <h2>Authors</h2>
            <div className="authors">
                {renderAuthors}
            </div>
            <h2>Reviews</h2>
            <div className="reviews">
                {renderReviews}
            </div>
        </div>
    );
}

export default Home;