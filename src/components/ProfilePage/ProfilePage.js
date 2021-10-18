import React from 'react';
import { useSelector } from 'react-redux';

function ProfilePage() {

    const user = useSelector(store => store.user)

    return(
        <div>
            <h3>{user.username}'s Profile</h3>
        </div>
    )
}

export default ProfilePage;