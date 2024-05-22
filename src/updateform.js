import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const UpdateIdsForm = () => {
  const [formData, setFormData] = useState({
    _id: '',
    id1: '',
    id2: '',
    id3: '',
    id4: '',
    id5: ''
  });

  useEffect(() => {
    // Fetch existing data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/retrieve`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}/store`, formData);
      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error.message);
    }
  };

  const addInputField = () => {
    const newKey = `id${Object.keys(formData).length}`;
    setFormData({ ...formData, [newKey]: '' });
  };

  const removeInputField = (keyToRemove) => {
    const newFormData = { ...formData };
    delete newFormData[keyToRemove];
    setFormData(newFormData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      {Object.keys(formData).map((key, index) => {
        if (key !== '_id') {
          return (
            <div key={index} className="input-group">
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                style={{ fontSize: '16px' }}
                placeholder={`Enter link ${key}`}
              />
              {index > 4 ? (
                <button type="button" onClick={() => removeInputField(key)}>Remove</button>
              ) : null}
            </div>
          );
        }
        return null;
      })}
      {Object.keys(formData).length < 10 ? (
        <button type="button" className="submit-button" onClick={addInputField}>Add</button>
      ) : null}
      <button type="submit" className="submit-button">Save</button>
      <Link to="/" className="button-link">Main App</Link>
      <style>
        {`
        .input-group {
          margin-bottom: 15px;
        }

        input[type="text"] {
          width: calc(100% - 90px); /* Adjusted width for the button and remove button */
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: border-color 0.3s ease;
        }

        input[type="text"]:focus {
          outline: none;
          border-color: #66afe9;
        }

        .submit-button {
          width: 100%;
          padding: 10px;
          margin-top: 15px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #45a049;
        }
        .button-link {
          display: inline-block;
          margin-top: 35px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .button-link:hover {
          background-color: #0056b3; /* Darker shade of blue on hover */
        }
        `}
      </style>
    </form>
  );
};

export default UpdateIdsForm;
