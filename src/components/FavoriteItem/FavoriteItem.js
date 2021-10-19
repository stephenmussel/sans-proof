import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function FavoriteItem({favorite}) {

    // NOTES
    // const dispatch = useDispatch();

    // const deleteFav = (event) => {
    //     console.log('clicked delete favorite button!');
    //     const action = {type: 'DELETE_FAVORITE', payload: event.target.value}
    //     dispatch(action);
        
    // }

    return(
        <div>
            <b>{favorite.name}</b>
            <p><em>Notes: </em>{favorite.notes}</p>
            {/* NOTES */}
            {/* <button>Edit Notes</button>&nbsp; */}
            {/* <button value={favorite.id} onClick={(event) =>  deleteFav(event)}>Delete</button><br /><br /> */}
        </div>
    )
}

export default FavoriteItem;