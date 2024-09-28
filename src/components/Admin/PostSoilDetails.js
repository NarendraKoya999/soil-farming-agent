import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import '../../styles/PostSoilDetails.css';

const PostSoilDetails = () => {
  const [soilData, setSoilData] = useState({
    name: '',
    nutrients: '',
    pH: '',
    texture: '',
    type: ''
  });

  const handleChange = (e) => {
    setSoilData({
      ...soilData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'soils'), soilData); // Posting to 'soils' collection
      alert('Soil details added successfully');
      setSoilData({ name: '', nutrients: '', pH: '', texture: '', type: '' }); // Reset form
    } catch (error) {
      console.error('Error adding soil details:', error);
    }
  };

  return (
    <div className="post-soil">
      <h2>Post Soil Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={soilData.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="nutrients" value={soilData.nutrients} onChange={handleChange} placeholder="Nutrients" required />
        <input type="text" name="pH" value={soilData.pH} onChange={handleChange} placeholder="pH Level" required />
        <input type="text" name="texture" value={soilData.texture} onChange={handleChange} placeholder="Texture" required />
        <input type="text" name="type" value={soilData.type} onChange={handleChange} placeholder="Type" required />
        <button type="submit">Submit Soil Details</button>
      </form>
    </div>
  );
};

export default PostSoilDetails;
