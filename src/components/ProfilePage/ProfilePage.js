import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProfilePage() {

    const user = useSelector(store => store.user);
    const favoriteList = useSelector(store => store.favorite);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = {type: 'FETCH_FAVORITE'}
        dispatch(action)
    }, [])

    return(
        <div>
            <h3>{user.username}'s Profile</h3>
            {JSON.stringify(favoriteList)}
        </div>
    )
}

export default ProfilePage;