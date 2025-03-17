// src/components/AddMovieForm.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';


const AddMovieForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Movie added (hypothetically)');
    navigate('/'); // Go back to dashboard
  };

  const handleCancel = () => {
    navigate('/'); // Go back to dashboard
  };

  return (
    <div className="add-movie-form-container">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Director" required />
        <select required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
        <input type="number" placeholder="Release Year" required />
        <textarea placeholder="Synopsis" required></textarea>
        <input type="url" placeholder="Poster Image URL" required />

        <div className="form-buttons">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
