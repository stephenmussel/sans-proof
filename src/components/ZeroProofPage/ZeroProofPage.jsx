import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ZeroProofPage() {

  const businessList = useSelector(store => store.business)

  return (
    <div className="container">
      <p>Zero Proof</p>
    </div>
  );
}

export default ZeroProofPage;
