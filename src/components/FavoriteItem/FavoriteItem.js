import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function FavoriteItem({favorite}) {

    return(
        <div>
            <b>{favorite.name}</b>
            <p><em>Notes: </em>{favorite.notes}</p>
            {/* <button value={favorite.id} onClick={(event) =>  deleteFav(event)}>Delete</button><br /><br /> */}
        </div>
    )
}

export default FavoriteItem;