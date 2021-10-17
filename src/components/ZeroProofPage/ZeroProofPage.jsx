import { use } from 'passport';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ZeroProofItem from '../ZeroProofItem/ZeroProofItem';

function ZeroProofPage() {

  const businessList = useSelector(store => store.business)
  const dispatch = useDispatch();

  // NUM 1
  let defaultBus = {
    name: '',
    rating: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    website: '',
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
      // NUM 2
      case 'name':
        setBus({...newBus, name: event.target.value})
        break;
      case 'rating':
        setBus({...newBus, rating: event.target.value})
        break;
      case 'description':
        setBus({...newBus, description: event.target.value})
        break;
      case 'address':
        setBus({...newBus, address: event.target.value})
        break;
      case 'city':
        setBus({...newBus, city: event.target.value})
        break;
      case 'state':
        setBus({...newBus, state: event.target.value})
        break;
      case 'zip':
        setBus({...newBus, zip: event.target.value})
        break;
      case 'phone':
        setBus({...newBus, phone: event.target.value})
        break;
      case 'website':
        setBus({...newBus, website: event.target.value})
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

// DELETEs business added by user
const deleteBus = (event) => {
  console.log('clicked delete button!');
  const action = {type: 'DELETE_BUSINESS', payload: event.target.value}
  dispatch(action);
}

  return (
    <div className="container">
      <h3>Zero Proof</h3>
      {/* {JSON.stringify(businessList)} */}
      <div>
        <form onSubmit={addNewBus}> 
          <input id={"name"} type="text" placeholder="name" value={newBus.name} onChange={handleBusInfo}/>
          {/* NUM 3 ...then go to business router*/}
          <input id={"rating"} type="number" placeholder="rating" value={newBus.rating} onChange={handleBusInfo}/>
          <input id={"description"} type="text" placeholder="description" value={newBus.description} onChange={handleBusInfo}/>
          <input id={"address"} type="text" placeholder="address" value={newBus.address} onChange={handleBusInfo}/>
          <input id={"city"} type="text" placeholder="city" value={newBus.city} onChange={handleBusInfo}/>
          <input id={"state"} maxLength="2" type="text" placeholder="state" value={newBus.state} onChange={handleBusInfo}/>
          <input id={"zip"} maxLength="5" type="number" placeholder="zip" value={newBus.zip} onChange={handleBusInfo}/>
          <input id={"phone"} type="text" placeholder="phone" value={newBus.phone} onChange={handleBusInfo}/>
          <input id={"website"} type="text" placeholder="website" value={newBus.website} onChange={handleBusInfo}/>

          <input type="submit" value="Add Business"/>
        </form>
      </div>
      {businessList.map(business => (
        <div key={business.id}>
          <ZeroProofItem
            // key={business.id}
            business={business}
          />
          <button value={business.id} onClick={(event) => deleteBus(event)}>Delete</button>
            <br /><br />
        </div>
      ))}
    </div>
  );
}

export default ZeroProofPage;
