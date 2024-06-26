import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const UpdateIdsFormCricket = () => {
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
      const response = await axios.get(`${baseUrl}/retrieve2`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const extractIdFromLink = (link) => {
    const match = link.match(/id=(\d+)/);
    return match ? match[1] : null;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: extractIdFromLink(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}/store2`, formData);
      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
    <div className="input-group">
        <input
          type="text"
          id="id1"
          name="id1"
          value={formData.id1}
          onChange={handleChange}
          style={{ fontSize: '16px' }}
          placeholder="Enter link to profile"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="id2"
          name="id2"
          value={formData.id2}
          onChange={handleChange}
          style={{ fontSize: '16px' }}
          placeholder="Enter link to profile"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="id3"
          name="id3"
          value={formData.id3}
          onChange={handleChange}
          style={{ fontSize: '16px' }}
          placeholder="Enter link to profile"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="id4"
          name="id4"
          value={formData.id4}
          onChange={handleChange}
          style={{ fontSize: '16px' }}
          placeholder="Enter link to profile"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="id5"
          name="id5"
          value={formData.id5}
          onChange={handleChange}
          style={{ fontSize: '16px' }}
          placeholder="Enter link to profile"
        />
      </div>
      <button type="submit" className="submit-button">Save</button>
      <Link to="/cricket" className="button-link">Cricket App</Link>
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

export default UpdateIdsFormCricket;
