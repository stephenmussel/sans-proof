import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function FavoriteItem({favorite}) {

    const deleteFav = (event) => {
        console.log('clicked delete favorite button!');
        
        
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