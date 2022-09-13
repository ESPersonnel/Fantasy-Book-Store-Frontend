import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AuthorForm( onAddAuthor) {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddAuthor({ name, bio });
        setName("");
        setBio("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Bio: </label>
        <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
        />
        <br />
        <input type="submit" value="Add Author" />
        </form>
    );
}

export default AuthorForm;