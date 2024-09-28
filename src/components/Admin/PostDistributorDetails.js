import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import '../../styles/PostDistributorDetails.css';

const PostDistributorDetails = () => {
  const [distributorData, setDistributorData] = useState({
    name: '',
    contact: '',
    location: ''
  });

  const handleChange = (e) => {
    setDistributorData({
      ...distributorData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'distributors'), distributorData); // Posting to 'distributors' collection
      alert('Distributor details added successfully');
      setDistributorData({ name: '', contact: '', location: '' }); // Reset form
    } catch (error) {
      console.error('Error adding distributor details:', error);
    }
  };

  return (
    <div className="post-distributor">
      <h2>Post Distributor Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={distributorData.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="contact" value={distributorData.contact} onChange={handleChange} placeholder="Contact" required />
        <input type="text" name="location" value={distributorData.location} onChange={handleChange} placeholder="Location" required />
        <button type="submit">Submit Distributor Details</button>
      </form>
    </div>
  );
};

export default PostDistributorDetails;
