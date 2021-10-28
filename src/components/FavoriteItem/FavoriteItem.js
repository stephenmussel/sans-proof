import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function FavoriteItem({favorite}) {

    return(
        <div>
            <h3><b>{favorite.name}</b></h3>
            <p><em><b>Drink Options: </b></em>{favorite.notes}</p>
            {/* <button value={favorite.id} onClick={(event) =>  deleteFav(event)}>Delete</button><br /><br /> */}
        </div>
    )
}

export default FavoriteItem;