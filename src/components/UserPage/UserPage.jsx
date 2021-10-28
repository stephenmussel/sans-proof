import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h3>Welcome, {user.username}!</h3>
      {/* <p>Your ID is: {user.id}</p> */}
      <p>Take your shoes off, stay a while. Browse our selection 
        of zero-proof options near you. As a user, you can also add 
        to this wonderful collection by sharing your favorites spots. 
        We're all friends here, cheers. </p>
      {/* <LogOutButton className="btn" /> */}
      <img src="images/home_page.png"/>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
