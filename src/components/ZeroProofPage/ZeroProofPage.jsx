import { use } from 'passport';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ZeroProofItem from '../ZeroProofItem/ZeroProofItem';
import AddForm from '../AddForm/AddForm';

function ZeroProofPage() {

  const businessList = useSelector(store => store.business)
  const dispatch = useDispatch();

  // GETs all businesses on page load
  useEffect(() => {
    const action = {type: 'FETCH_BUSINESS'}
    dispatch(action)
  }, [])

  return (
    <div className="container">
      <h3>Zero Proof</h3>
      {/* {JSON.stringify(businessList)} */}
      <AddForm />
      {businessList.map(business => (
        <ZeroProofItem
          key={business.id}
          business={business}
        />
      ))}
    </div>
  );
}

export default ZeroProofPage;
