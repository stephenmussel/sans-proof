import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function FavoriteItem({favorite}) {

    const dispatch = useDispatch();

    const deleteFav = (event) => {
        console.log('clicked delete favorite button!');
        const action = {type: 'DELETE_FAVORITE', payload: event.target.value}
        dispatch(action);
        
    }

    return(
        <div>
            <b>{favorite.name}</b>
            <p><em>Notes: </em>{favorite.notes}</p>
            <button>Edit Notes</button>&nbsp;
            <button onClick={(event) =>  deleteFav(event)}>Delete</button><br /><br />
        </div>
    )
}

export default FavoriteItem;