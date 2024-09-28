// src/components/User/ViewDistributorDetails.js
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import '../../styles/ViewDistributorDetails.css';

const ViewDistributorDetails = () => {
  const [distributorDetails, setDistributorDetails] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'distributors'), (snapshot) => {
      const updatedDistributorDetails = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDistributorDetails(updatedDistributorDetails);
    }, (error) => {
      console.error('Error fetching distributor details:', error);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="distributor-details-container">
      <h2>Distributor Details</h2>
      <div className="card-container">
        {distributorDetails.map(distributor => (
          <div className="card" key={distributor.id}>
            <p><strong>Name:</strong> {distributor.name}</p>
            <p><strong>Contact:</strong> {distributor.contact}</p>
            <p><strong>Location:</strong> {distributor.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDistributorDetails;
