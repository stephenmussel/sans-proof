import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

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
            {/* <p>List of favorite businesses will include: <em><b>Name, </b><b>Notes</b></em></p> */}
            {/* {JSON.stringify(favoriteList)} */}
            <br /><br />
            {favoriteList.map(favorite => (
                <div>
                    {/* <b>{favorite.name}</b> */}
                    {/* <p><em>Notes: </em>{favorite.notes}</p> */}
                </div>
            ))}
            <button>Update</button>&nbsp;
            <button>Delete</button><br /><br />
        </div>
    )
}

export default ProfilePage;