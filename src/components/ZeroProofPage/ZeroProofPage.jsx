import { use } from 'passport';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
      <p>Zero Proof</p>
    </div>
  );
}

export default ZeroProofPage;
