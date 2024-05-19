import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const UpdateIdsForm = () => {
  const [formData, setFormData] = useState({
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
      const { id1, id2, id3, id4, id5 } = response.data;
      setFormData({ id1, id2, id3, id4, id5 });
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
      await axios.post(`${baseUrl}/store`, formData);
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
      <style>
        {`
        .input-group {
          margin-bottom: 15px;
        }

        input[type="text"] {
          width: 100%;
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
        `}
      </style>
    </form>
  );
};

export default UpdateIdsForm;
