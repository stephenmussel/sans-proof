import { use } from 'passport';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ZeroProofItem from '../ZeroProofItem/ZeroProofItem';

function ZeroProofPage() {

  const businessList = useSelector(store => store.business)
  const dispatch = useDispatch();

  let defaultBus = {
    name: '',
  }

  // comes after defaultBus defined!
  const [newBus, setBus] = useState(defaultBus);

  // GETs all businesses on page load
  useEffect(() => {
    const action = {type: 'FETCH_BUSINESS'}
    dispatch(action)
  }, [])

  const handleBusInfo = (event) => {
    console.log('in handleBusInfo');
    console.log(event.target.value);
    switch (event.target.id) {
      case 'name':
        setBus({...newBus, name: event.target.value})
        break;
    
      default:
        break;
    }
  }

  // POSTs new business
  const addNewBus = (event) => {
    console.log('clicked add business button!');
    event.preventDefault();
    const action = {type: 'POST_BUSINESS', payload: newBus};
    dispatch(action);
    // updates defaultBus based on user input(s)
    setBus(defaultBus);
    
}

  return (
    <div className="container">
      <h3>Zero Proof</h3>
      {/* {JSON.stringify(businessList)} */}
      <div>
        <form onClick={addNewBus}> 
          <input required id={"name"} type="text" placeholder="name" value={newBus.name} onChange={handleBusInfo}/>
          <input type="submit" value="Add Business"/>
        </form>
      </div>
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
