import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function FavoriteItem({favorite}) {

    const [newNotes, setNotes] = useState('');
    const dispatch = useDispatch();

    const newNotesObj = {
        notes: newNotes,
    }

    // UPDATE notes
    const updateNotes = (event) => {
        event.preventDefault();
        console.log('clicked update notes button!');
        console.log('updating newNotes: ', newNotesObj);
        const action = {type: 'UPDATE_NOTES', payload: newNotesObj}
        setNotes('');
        dispatch(action);
    }

    return(
        <div>
            <b>{favorite.name}</b>
            <p><em>Notes: </em>{favorite.notes}</p>
            {/* NOTES */}
            {/* <button>Edit Notes</button>&nbsp; */}
            {/* <button value={favorite.id} onClick={(event) =>  deleteFav(event)}>Delete</button><br /><br /> */}
            <form onSubmit={updateNotes}>
                <input
                    type="text"
                    placeholder="notes..."
                    value={newNotes}
                    onChange={(event) => setNotes(event.target.value)}
                />
                <input type="submit" value="Update Notes"/>
            </form>
        </div>
    )
}

export default FavoriteItem;