// src/components/User/ViewSoilDetails.js
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import '../../styles/ViewSoilDetails.css';

const ViewSoilDetails = () => {
  const [soilDetails, setSoilDetails] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'soils'), (snapshot) => {
      const updatedSoilDetails = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSoilDetails(updatedSoilDetails);
    }, (error) => {
      console.error('Error fetching soil details:', error);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="soil-details-container">
      <h2>Soil Details</h2>
      <div className="card-container">
        {soilDetails.map(soil => (
          <div className="card" key={soil.id}>
            <p><strong>Name:</strong> {soil.name}</p>
            <p><strong>Nutrients:</strong> {soil.nutrients}</p>
            <p><strong>pH:</strong> {soil.pH}</p>
            <p><strong>Texture:</strong> {soil.texture}</p>
            <p><strong>Type:</strong> {soil.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSoilDetails;
